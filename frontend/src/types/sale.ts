import { Seller } from "./seller"

export type Sale = {

  id: number
  visited: number
  deals: number
  amount: number
  date: string
  seller: Seller
}

export type SalePage = {

  content?: Sale[]
  last: boolean
  totalPages: number
  totalEements: number
  size?: number
  number: number
  first: boolean
  numberOflements?: number
  empty?: boolean
}

export type SaleSum = {

  sellerName: string
  sum: Number
}

export type SaleSucess = {

  sellerName: string
  visited: number
  deals: number
}