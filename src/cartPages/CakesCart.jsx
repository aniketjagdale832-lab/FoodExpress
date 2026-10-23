import { Cakes } from '../FoodData/Products'
import ProductMenu from './ProductMenu'


const CakesCart = () => {

  return (
    <>
      <ProductMenu title="Cakes" product={Cakes} />
    </>
  )
}

export default CakesCart