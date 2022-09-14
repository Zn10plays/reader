interface BookData {
  title: string,
  author: string,
  addedAt: number,
  type: 'pdf' | 'web',
  length: number,
  img: string
}

export { BookData }
