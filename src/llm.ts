import path from 'path';
import { config } from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from '@langchain/core/messages';
import { README_ANALYSIS_PROMPT } from './prompts';
import { JsonOutputParser } from '@langchain/core/output_parsers';
import { JSONFilePreset } from 'lowdb/node';
import { sanitizeFilename } from './utils';

// 加载环境变量
config();

interface AnalysisResult {
  url: string;
  name: string;
  category: string;
  tags: string[];
}

/**
 * 使用 LLM 分析 URL 并提取项目信息
 * @param urls README 文件的 URL 列表
 * @returns 包含名称、分类、标签等信息的对象数组
 */
async function analyzeReadmesWithLLM(urls: string[]) {
  // 初始化 LLM
  const llm = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    configuration: {
      baseURL: process.env.OPENAI_BASE_URL,
    },
    modelName: process.env.MODEL_NAME || 'qwen-plus',
  });

  // 初始化 JSON 输出解析器
  const parser = new JsonOutputParser();

  // 使用 lowdb 读取 readmes.json 文件
  const readmePath = path.join(process.cwd(), 'readmes.json');
  const db = await JSONFilePreset<{ readmes: ReadmeItem[] }>(readmePath, { readmes: [] });

  // 过滤出已经处理的项目
  const examples = db.data.readmes.filter(
    readme => readme.name && readme.category && readme.tags
  ).map(item => {
    return {
      url: item.url,
      name: item.name,
      category: item.category,
      tags: item.tags
    }
  })

  // 使用 PromptTemplate 构造提示词
  const formattedPrompt = await README_ANALYSIS_PROMPT.format({
    urls: urls.join('\n'),
    examples: JSON.stringify(examples)
  });

  // 调用 LLM
  const response = await llm.invoke([
    new HumanMessage(formattedPrompt)
  ]);

  // 解析输出
  const result = await parser.invoke(response);
  return result;
}

/**
 * 检查并处理重复名称
 * @param analysisResults 分析结果数组
 * @param existingReadmes 已存在的readme项目
 * @returns 处理后的分析结果
 */
async function checkAndHandleDuplicates(analysisResults: AnalysisResult[], existingReadmes: ReadmeItem[]): Promise<AnalysisResult[]> {
  // 获取所有已存在的名称
  const existingNames = new Set(existingReadmes.map(r => r.name).filter(name => name !== undefined));

  // 检查是否有重复名称
  const nameCount: Record<string, number> = {};
  const duplicates: string[] = [];

  // 统计分析结果中的名称重复情况
  analysisResults.forEach(result => {
    nameCount[result.name] = (nameCount[result.name] || 0) + 1;
  });

  // 检查与现有名称的冲突
  analysisResults.forEach(result => {
    if (existingNames.has(result.name) || nameCount[result.name] > 1) {
      if (!duplicates.includes(result.name)) {
        duplicates.push(result.name);
      }
    }
  });

  // 如果没有重复，直接返回原结果
  if (duplicates.length === 0) {
    return analysisResults;
  }

  console.log(`发现重复名称: ${duplicates.join(', ')}. 正在重新处理...`);

  // 收集有重复名称的项目的URL
  const duplicateUrls = analysisResults
    .filter(result => duplicates.includes(result.name))
    .map(result => result.url);

  // 重新让LLM处理这些有重复名称的项目
  if (duplicateUrls.length > 0) {
    try {
      const newResults = await analyzeReadmesWithLLM(duplicateUrls);

      // 如果返回的是数组，替换重复的结果
      if (Array.isArray(newResults)) {
        const urlToNewResult: Record<string, AnalysisResult> = {};
        newResults.forEach(result => {
          urlToNewResult[result.url] = result;
        });

        // 替换重复的分析结果
        return analysisResults.map(result => {
          if (duplicateUrls.includes(result.url) && urlToNewResult[result.url]) {
            return urlToNewResult[result.url];
          }
          return result;
        });
      }
    } catch (error) {
      console.error('重新处理重复名称时出错:', error);
    }
  }

  // 如果重新处理失败，返回原始结果
  return analysisResults;
}

/**
 * 处理 readmes.json 文件
 * @returns Promise<void>
 */
async function processReadmes(): Promise<void> {
  try {
    // 使用 lowdb 读取 readmes.json 文件
    const readmePath = path.join(process.cwd(), 'readmes.json');
    const db = await JSONFilePreset<{ readmes: ReadmeItem[] }>(readmePath, { readmes: [] });

    // 过滤出未处理的项目
    const unprocessedReadmes = db.data.readmes.filter(
      readme => !readme.name || !readme.category || !readme.tags
    );

    if (unprocessedReadmes.length === 0) {
      console.log('没有需要处理的项目');
      return;
    }

    console.log(`正在批量处理 ${unprocessedReadmes.length} 个项目`);

    try {
      // 收集所有未处理的 URL
      const urls = unprocessedReadmes.map(readme => readme.url);

      // 使用 LLM 批量分析所有 URL
      const analysisResults = await analyzeReadmesWithLLM(urls);

      // 检查并处理重复名称
      let finalResults = Array.isArray(analysisResults) ? analysisResults : [];
      if (Array.isArray(analysisResults)) {
        finalResults = await checkAndHandleDuplicates(analysisResults, db.data.readmes);

        for (const analysis of finalResults) {
          const readme = db.data.readmes.find(r => r.url === analysis.url);
          if (readme) {
            readme.name = analysis.name;
            readme.category = analysis.category;
            readme.categoryId = analysis.category;
            readme.tags = analysis.tags;
            readme.filename = sanitizeFilename(analysis.name)
            console.log(`处理完成: ${readme.name}`);
          }
        }
      }

      // 保存更新后的数据
      await db.write();
      console.log('所有 README 处理完成，结果保存到 readmes.json');
    } catch (error: any) {
      // 处理失败的项目仅记录日志
      console.error(`批量处理时出错:`, error.message || error.toString());
    }

    // 最后再次保存确保所有数据都被写入
    await db.write();
  } catch (error) {
    console.error('处理 readmes.json 时出错:', error);
    throw error;
  }
}

export { processReadmes };