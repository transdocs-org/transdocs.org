import { PromptTemplate } from '@langchain/core/prompts';

/**
 * README 分析提示词模板
 */
export const README_ANALYSIS_PROMPT = PromptTemplate.fromTemplate(`
请分析以下 URL 列表，并为每个 URL 提取项目信息。

URL 列表:
{urls}

请为每个 URL 以 JSON 格式返回以下信息：
1. name: 项目名称（从 URL 中提取，需要符合对应行业规范，不要包含特殊字符，应该包含主包信息，避免主包不同但是子包相同导致的项目名称一致。）
2. category: 项目分类
3. tags: 相关标签数组

返回一个 JSON 数组，每个元素包含 url 和对应的分析信息，格式如下:
[
  {{
    "url": "原始URL",
    "name": "项目名称",
    "category": "分类",
    "tags": ["标签1", "标签2"]
  }},
  // ... 更多项目
]

EXAMPLES:
{examples}
`.trim());