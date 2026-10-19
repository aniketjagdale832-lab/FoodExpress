import React from 'react'
import { Shawarma } from '../FoodData/Products'
import { addToCart } from './addedToCart'
import { useNavigate } from 'react-router-dom'

const ShawarmaCart = () => {

  const navigate = useNavigate();
  return (
    <>
      <section className='food-section'>
        <div className="container">
          <h2 className='food-header pt-3 text-center fw-bold ' id='pizzaFood'>Shawarma</h2>

          <div className="row">
            {
              Shawarma.map((shawarma) => (

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card food-card  border-0 mb-3">

                    <img src={shawarma.img} alt="" className='card-img-top food-img' />

                    <div className="body  p-3">
                      <div className="food-type ">
                        <span
                          className={shawarma.type ? "veg-symbol" : "nonveg-symbol"}
                        >
                          <span className="food-dot"></span>
                        </span>

                      </div>

                      <h4 className='card-title food-name'>
                        {shawarma.name}
                      </h4>

                      <p className='food-description'>
                        {shawarma.description}
                      </p>

                      <div className="d-flex justify-content-between align-items-center ">

                        <p className='card-price'>
                          ₹{shawarma.price}
                        </p>
                        <button className='food-add-btn btn ' onClick={()=> addToCart(shawarma,navigate)}>
                          Add 
                          <i className="bi bi-cart-plus"></i> 
                        </button>
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

export default ShawarmaCart