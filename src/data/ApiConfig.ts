export interface ApiConfig {
  origin: string
  headers: Record<string, string>
}

export const apiConfig: ApiConfig = {
  origin: 'https://gorest.co.in',
  headers: {
    Authorization: `Bearer ${process.env.GOREST_API_KEY}`,
    'Content-Type': 'application/json',
  },
}
