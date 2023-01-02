import React from 'react'

export interface SettingsDataType {
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

export interface FrontpageDataType {
  hero: string
  keywords: [
    {
      keyword: string
    }
  ]
  showcases: [ShowcaseDataType]
}

export interface ShowcaseDataType {
  title: string
  subtitle: string
  image1: {
    width: number
    height: number
    url: string
    titel: string
  }
  image2: {
    width: number
    height: number
    url: string
    titel: string
  }
  text: [object]
}

export interface ContactDataType {
  text: string
}
