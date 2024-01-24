export type Providers = {
  provider_id: number
  name: string
  bio: string
  title: string
}

export type ProvidersResponse = {
  data: {
    results: Providers[]
  }
}