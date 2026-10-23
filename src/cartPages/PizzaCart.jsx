import React from 'react'
import ProductMenu from './ProductMenu'
import { Pizza } from '../FoodData/Products'

const PizzaCart = () => {
  return (
    <ProductMenu title="Pizza" product={Pizza} />
  )
}

export default PizzaCart