declare interface ReadmeItem {
  url: string;
  name?: string;
  category?: string;
  categoryId?: string;
  tags?: string[];
  savePath?: string;
  filename?: string
}

declare type ReadmeData = ReadmeItem[]

declare interface Category {
  name: string;
  id: string;
  items: Required<ReadmeItem>[];
}