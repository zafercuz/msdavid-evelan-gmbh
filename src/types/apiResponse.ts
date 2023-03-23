type Support = {
  url: string
  text: string
}

type Meta = {
  page: number
  per_page: number
  total: number
  total_pages: number
  support: Support
}

type ApiListResponse<T> = Meta & {
  data: T[]
}

export { type Meta, type Support, type ApiListResponse }
