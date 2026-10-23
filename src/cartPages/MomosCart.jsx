import React from 'react'
import ProductMenu from './ProductMenu'
import { Momos } from '../FoodData/Products'

const MomosCart = () => {
  return (
    <ProductMenu title="Momos" product={Momos} />
  )
}

export default MomosCart