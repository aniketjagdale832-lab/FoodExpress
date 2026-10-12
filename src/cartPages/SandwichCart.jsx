import React from 'react'
import { Sandwich } from '../FoodData/Products'

const SandwichCart = () => {
  return (
    <>
      <section className='food-section'>
        <div className="container">
          <h2 className='food-header pt-3 text-center fw-bold ' id='pizzaFood'>Sandwich</h2>

          <div className="row">
            {
              Sandwich.map((sandwich) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card food-card  border-0 mb-3">
                    <img src={sandwich.img} alt="" className='card-img-top food-img' />
                    <div className="body  p-3">
                      <div className="food-type ">
                        <span
                          className={sandwich.type ? "veg-symbol" : "nonveg-symbol"}
                        >
                          <span className="food-dot"></span>
                        </span>

                        {/* <span className={food.veg ? "veg-text" : "nonveg-text"}>
                                                           {food.veg ? "Veg" : "Non-Veg"}
                                                       </span> */}
                      </div>
                      <h4 className='card-title food-name'>{sandwich.name}</h4>
                      <p className='food-description'>{sandwich.description}</p>
                      <div className="d-flex justify-content-between align-items-center ">
                        <p className='card-price'>₹{sandwich.price}</p>
                        <button className='food-add-btn btn '>Add <i className="bi bi-cart-plus"></i> </button>
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

export default SandwichCart