import React from 'react'
import ProductMenu from './ProductMenu'
import { Paratha } from '../FoodData/Products'

const ParathaCart = () => {
  return (
    <ProductMenu title="Paratha" product={Paratha} />
  )
}

export default ParathaCart