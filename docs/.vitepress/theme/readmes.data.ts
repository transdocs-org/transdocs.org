import { readmes, categoryMap } from '../common'

const tags = [
  ...new Set(
    readmes
      .filter((item) => Array.isArray(item.tags))
      .reduce((acc, readme) => {
        return [...acc, ...readme.tags!];
      }, [] as string[])
  )
];

const sites = [
  {
    name: 'Model Context Protocol',
    url: 'https://mcp.transdocs.org'
  },
  {
    name: 'UnoCSS',
    url: 'https://unocss.transdocs.org'
  },
  {
    name: 'Nestjs',
    url: 'https://nestjs.transdocs.org'
  },
  {
    name: 'Langchainjs',
    url: 'https://langchainjs.transdocs.org'
  },
  {
    name: 'ChromaDB',
    url: 'https://chroma.transdocs.org'
  },
  {
    name: 'ta-lib-python',
    url: 'https://ta-lib-python.transdocs.org'
  },
  {
    name: 'trading-signals',
    url: 'https://trading-signals.transdocs.org'
  },
  {
    name: 'node-cron',
    url: 'https://nodecron.transdocs.org'
  }
]

export const data = {
  readmes,
  categoryMap,
  categories: Object.values(categoryMap),
  tags,
  sites
}

export default {
  load() {
    return data
  }
}
