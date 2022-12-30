export interface SettingsType {
  title: string
  description: string
  author: string
  keywords: string
  web: string
  owner: string
  company?: string
  city: string
  street: string
  email: string
  mobile?: string
  phone?: string
  tax?: string
}

export interface FrontpageType {
  hero: string
  keywords: [
    {
      keyword: string
    }
  ]
}
