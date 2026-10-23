import React from 'react'
import ProductMenu from './ProductMenu'
import { Shawarma } from '../FoodData/Products'

const ShawarmaCart = () => {
  return (
    <ProductMenu title="Shawarma" product={Shawarma} />
  )
}

export default ShawarmaCart