import fetchApi from "../utils/fetch-api"

import getAllProductQuery from "../utils/queries/get-all-products"
import { ProductConnection } from "../schema"
import { normalizeProduct } from "../utils/normalize"

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async(): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductQuery })

  const products = data.products.edges.map(({node: product}) => 
    normalizeProduct(product)
  ) ?? []

  return products
}

export default getAllProducts