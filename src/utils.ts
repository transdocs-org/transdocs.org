import parseGithubUrl from 'git-url-parse';

// 将文件名中的空格替换为连字符，确保跨系统兼容性
export function sanitizeFilename(filename: string): string {
  return filename.replace(/\s+/g, '-').toLocaleLowerCase()
}


/**
 * 将GitHub URL转换为raw.githubusercontent.com的URL
 * @param url GitHub URL
 * @returns 转换后的raw URL
 */
export function convertToRawUrl(url: string): string {
  const parsed = parseGithubUrl(url);

  if (!parsed) {
    throw new Error('Invalid GitHub URL');
  }

  const { owner, name, ref, filepath } = parsed

  return `https://raw.githubusercontent.com/${owner}/${name}/refs/heads/${ref}/${filepath}`
}