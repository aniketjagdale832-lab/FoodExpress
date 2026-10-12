import React from 'react'
import { Biryanis } from '../FoodData/Products'

const BiryaniCart = () => {
  return (
    <>
      <section className='food-section'>
        <div className="container">
          <h2 className='food-header pt-3 text-center fw-bold ' id='pizzaFood'>Biryani</h2>

          <div className="row">
            {
              Biryanis.map((biryani) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card food-card  border-0 mb-3">
                    <img src={biryani.img} alt="" className='card-img-top food-img' />
                    <div className="body  p-3">
                      <div className="food-type ">
                        <span
                          className={biryani.type ? "veg-symbol" : "nonveg-symbol"}
                        >
                          <span className="food-dot"></span>
                        </span>

                        {/* <span className={food.veg ? "veg-text" : "nonveg-text"}>
                                                              {food.veg ? "Veg" : "Non-Veg"}
                                                          </span> */}
                      </div>
                      <h4 className='card-title food-name'>{biryani.name}</h4>
                      <p className='food-description'>{biryani.description}</p>
                      <div className="d-flex justify-content-between align-items-center ">
                        <p className='card-price'>₹{biryani.price}</p>
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

export default BiryaniCart