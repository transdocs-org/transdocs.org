import fs from 'node:fs'
import parseGithubUrl from 'git-url-parse';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import type { Node, Parent } from 'unist';
import remarkGithub from 'remark-github'
import { convertToRawUrl } from './utils';

/**
 * 定义具有 URL 属性的节点类型
 */
interface NodeWithUrl extends Node {
  url: string;
}


/**
 * 检查链接是否为需要转换为 raw 链接的静态资源
 * @param url 链接地址
 * @returns 是否需要转换
 */
function isStaticAsset(url: string): boolean {
  return /\.(png|jpg|jpeg|gif|svg|webp|ico|bmp|tiff|avif)$/i.test(url);
}

/**
 * 将特定类型的GitHub链接转换为raw链接
 * @param url 需要转换的URL
 * @returns 转换后的raw URL或原始URL
 */
function convertToRawUrlIfNeeded(url: string): string {
  // 如果是 GitHub 链接且是图片等静态资源，则转换为 raw 链接
  if (url.includes('github.com') && isStaticAsset(url)) {
    try {
      return convertToRawUrl(url);
    } catch (error) {
      console.warn(`无法转换为 raw 链接: ${url}`, error);
    }
  }
  return url;
}

/**
 * 类型守卫：检查节点是否具有 URL 属性
 * @param node 节点
 * @returns 是否具有 URL 属性
 */
function hasUrlProperty(node: Node): node is NodeWithUrl {
  return 'url' in node && typeof (node as NodeWithUrl).url === 'string';
}

/**
 * 遍历 AST 节点
 * @param node AST 节点
 * @param visitor 访问器函数
 */
function visit(node: Node, visitor: (node: Node) => void) {
  visitor(node);

  if ('children' in node && Array.isArray((node as Parent).children)) {
    (node as Parent).children.forEach(child => visit(child, visitor));
  }
}

/**
 * 处理 Markdown AST 中的链接节点
 * @param ast Markdown AST
 * @param baseUrl 基础 URL
 */
function processLinksInAst(ast: Node, baseUrl: string) {
  visit(ast, (node) => {
    // 处理链接节点、图片节点和链接定义节点
    if (hasUrlProperty(node)) {
      // 如果链接是文件内跳转（如 #section），则不处理
      if (node.url.startsWith('#')) {
        return;
      }

      // 如果链接已经是绝对路径，则检查是否需要转换为 raw 链接
      if (node.url.startsWith('http') || node.url.startsWith('//')) {
        node.url = convertToRawUrlIfNeeded(node.url);
        return;
      }

      // 处理相对路径
      try {
        const absoluteUrl = new URL(node.url, baseUrl).href;
        node.url = convertToRawUrlIfNeeded(absoluteUrl);
      } catch (error) {
        // 如果URL解析失败，记录警告
        const nodeType = node.type;
        console.warn(`无法解析相对链接 (${nodeType}): ${node.url}`, error);
      }
    }
  });
}

/**
 * 将README中的相对路径链接转换为绝对路径链接（使用 AST 方式）
 * @param content README文件内容
 * @param githubUrl 原始GitHub URL
 * @returns 处理后的README内容
 */
export async function convertRelativeLinksToAbsolute(content: string, githubUrl: string): Promise<string> {
  try {
    // 解析 markdown 为 AST，使用 GitHub Flavored Markdown 规则
    const ast = unified()
      .use(remarkGfm)
      .use(remarkGithub)
      .use(remarkParse)
      .parse(content);
    // 保存 ast 为文件
    fs.writeFileSync('ast.json', JSON.stringify(ast, null, 2));


    // 构建基础 URL
    const baseUrl = githubUrl.endsWith('/') ? githubUrl : `${githubUrl}/`;


    // 处理 AST 中的链接
    processLinksInAst(ast, baseUrl);

    // 将 AST 转换回 markdown，使用 GitHub Flavored Markdown 规则
    const processedContent = unified()
      .use(remarkStringify)
      .use(remarkGfm)
      .use(remarkGithub)
      .stringify(ast);

    return processedContent;
  } catch (error) {
    console.error('处理 Markdown 链接时出错:', error);
    // 出错时返回原始内容
    return content;
  }
}