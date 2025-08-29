import fs from 'fs'
import readmes from '../../readmes.json';

const tags = [
  ...new Set(
    readmes.readmes
      .filter((item) => Array.isArray(item.tags))
      .reduce((acc, readme) => {
        return [...acc, ...readme.tags!];
      }, [] as string[])
  )
];

export default {
  paths() {
    return tags
      .map((tag) => {
        return { params: { tag } }
      })
  }
}