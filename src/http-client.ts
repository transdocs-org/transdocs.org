import http from 'http';
import https from 'https';
import { URL } from 'url';
import { Writable } from 'stream';
import { HttpsProxyAgent } from 'https-proxy-agent';

/**
 * 使用 Node.js 原生 http/https 模块发送 GET 请求
 * @param url 请求的URL
 * @param options 请求选项
 * @returns Promise<string>
 */
export async function httpGet(url: string, options: { 
  timeout?: number;
  proxy?: string;
} = {}): Promise<string> {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;
    
    const requestOptions: any = {
      method: 'GET',
      timeout: options.timeout || 10000,
    };

    // 如果提供了代理配置
    if (options.proxy) {
      const agent = new HttpsProxyAgent(options.proxy);
      requestOptions.agent = agent;
    }

    requestOptions.hostname = parsedUrl.hostname;
    requestOptions.port = parsedUrl.port;
    requestOptions.path = parsedUrl.pathname + parsedUrl.search;

    const req = client.request(requestOptions, (res) => {
      const { statusCode } = res;
      
      if (statusCode && (statusCode < 200 || statusCode >= 300)) {
        reject(new Error(`Request failed with status code ${statusCode}`));
        return;
      }

      const chunks: Buffer[] = [];
      
      res.on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      });

      res.on('end', () => {
        try {
          const data = Buffer.concat(chunks).toString('utf-8');
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}