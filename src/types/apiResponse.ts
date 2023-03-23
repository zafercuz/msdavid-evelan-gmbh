type Support = {
  url: string
  text: string
}

type Meta = {
  page: number
  perPage: number
  total: number
  totalPages: number
  support: Support
}

type ApiListResponse<T> = Meta & {
  data: T[]
}

export { type Meta, type Support, type ApiListResponse }
