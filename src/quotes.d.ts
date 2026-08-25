export interface Quote {
  text: string
  source: string
  sourceUrl?: string
  date?: string
  author: string
  authorUrl?: string
}

declare const quotes: Quote[]
export default quotes
