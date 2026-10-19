import React from 'react'
import { Burger } from '../FoodData/Products'
import { useNavigate } from 'react-router-dom'
import { addToCart } from './addedToCart';



const BurgerCart = () => {

  const navigate = useNavigate();
  return (
    <>
      <section className='food-section'>
        <div className="container">
          <h2 className='food-header pt-3 text-center fw-bold ' id='burgerFood'>Burgers</h2>

          <div className="row">
            {
              Burger.map((burger) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card food-card  border-0 mb-2">
                    <img src={burger.img} alt="" className='card-img-top food-img' />
                    <div className="body  p-3">
                      <div className="food-type ">
                        <span
                          className={burger.type ? "veg-symbol" : "nonveg-symbol"}
                        >
                          <span className="food-dot"></span>
                        </span>

                        
                      </div>

                      <h4 className='card-title food-name'>
                        {burger.name}
                      </h4>

                      <p className='food-description'>
                        {burger.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center ">

                        <p className='card-price'>
                          ₹{burger.price}
                        </p>
                        <button className='food-add-btn btn '
                        onClick={()=>addToCart(burger,navigate)}
                        >
                          Add <i className="bi bi-cart-plus"></i> </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>

    </>
  )
}

export default BurgerCart