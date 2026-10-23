import React from 'react'
import ProductMenu from './ProductMenu'
import { Sandwich } from '../FoodData/Products'

const SandwichCart = () => {
  return (
   <ProductMenu title="Sandwich" product={Sandwich} />
  )
}

export default SandwichCart