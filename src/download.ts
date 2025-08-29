import fs from 'fs';
import { httpGet } from './http-client';
import { convertRelativeLinksToAbsolute } from './markdown';
import { convertToRawUrl } from './utils';

function convertToRawReadmeUrl(url: string) {
  const rawUrl = convertToRawUrl(url)
  return `${rawUrl}${rawUrl.endsWith('/') ? '' : '/'}README.md`
}

/**
 * 带重试机制下载README文件到指定路径
 * @param url README文件的URL
 * @param filePath 保存文件的本地路径
 * @param maxRetries 最大重试次数
 * @param proxy 代理服务器地址，例如 'http://127.0.0.1:10808'
 * @returns Promise<void>
 */
export async function downloadReadme(url: string, filePath: string, maxRetries: number = 10, proxy?: string): Promise<void> {
  let lastError: any;

  const downloadUrl = url.includes('github.com') ? convertToRawReadmeUrl(url) : url;

  for (let i = 0; i < maxRetries; i++) {
    try {
      // 发送HTTP GET请求获取文件内容
      let data = await httpGet(downloadUrl, { timeout: 10000, proxy });

      // 如果是GitHub URL，处理相对链接
      if (url.includes('github.com')) {
        data = await convertRelativeLinksToAbsolute(data, url);
      }

      // 写入文件
      fs.writeFileSync(filePath, data, 'utf-8');
      return;
    } catch (error: any) {
      lastError = error;
      console.log(`下载失败 (${i + 1}/${maxRetries}): ${downloadUrl}`, error.message);

      // 检查是否是客户端错误（4xx），如果是则不重试
      if (error.message && error.message.includes('4')) {
        // 4xx 错误通常是客户端错误，不需要重试
        throw new Error(`下载 ${downloadUrl} 失败: ${error.message}`);
      }

      // 在重试前等待一段时间，使用指数退避策略
      if (i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
        console.log(`等待 ${delay}ms 后重试...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw new Error(`下载 ${downloadUrl} 失败，已重试 ${maxRetries} 次: ${lastError.message}`);
}