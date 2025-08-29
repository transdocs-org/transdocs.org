import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import { processReadmes } from './llm';
import { downloadReadme } from './download';
import { sanitizeFilename } from './utils';

async function main() {
  // 初始化命令行参数解析器
  const program = new Command();
  
  program
    .name('transdocs')
    .description('Translate documentation tool')
    .version('1.0.0')
    .option('-p, --proxy <proxy>', 'set proxy server, e.g. http://127.0.0.1:10808')
    .parse();
    
  const options = program.opts();

  try {
    // 处理 readmes.json 文件
    await processReadmes();

    // 读取处理后的 readmes.json 文件
    const readmePath = path.join(process.cwd(), 'readmes.json');
    const readmesData = JSON.parse(fs.readFileSync(readmePath, 'utf-8'));
    const readmes = readmesData.readmes;

    // 创建 docs 目录（如果不存在）
    const docsDir = path.join(process.cwd(), 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir);
    }

    // 遍历所有 readme 项目并下载文件
    for (const readme of readmes) {
      try {
        // 确保 category 目录存在
        const categoryDir = path.join(docsDir, readme.category);
        if (!fs.existsSync(categoryDir)) {
          fs.mkdirSync(categoryDir, { recursive: true });
        }

        // 处理文件名，将空格替换为连字符
        const sanitizedName = readme.filename;

        // 构造保存路径: docs/{category}/{sanitizedName}.md
        const filePath = path.join(categoryDir, sanitizedName + '.md');

        // 检查文件是否已存在，如果存在则跳过下载
        if (fs.existsSync(filePath)) {
          console.log(`文件已存在，跳过下载: ${sanitizedName}.md`);
          continue;
        }

        // 下载文件
        console.log(`正在下载: ${sanitizedName}.md from ${readme.url}`);
        await downloadReadme(readme.url, filePath, 10, options.proxy);
        console.log(`下载完成: ${sanitizedName}.md`);
      } catch (error) {
        console.error(`下载 ${readme.name} 时出错:`, error);
      }
    }
  } catch (error) {
    console.error('执行出错:', error);
  }
}

main();