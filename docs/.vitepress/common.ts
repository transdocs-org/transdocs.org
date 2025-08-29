import _readmes from '../../readmes.json'

export const readmes = _readmes.readmes.filter(item => !!item.categoryId) as Required<ReadmeItem>[]

export const categoryMap = readmes.reduce<Record<string, Category>>((acc, cur) => {
  const { categoryId } = cur

  if (!acc[categoryId]) {
    acc[categoryId] = {
      name: cur.category,
      id: cur.categoryId,
      items: []
    }
  }

  acc[categoryId].items.push(cur)

  acc[categoryId].items.sort((a, b) => a.filename.localeCompare(b.filename))

  return acc
}, {})

export const categories = Object.values(categoryMap)