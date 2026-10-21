import React, { useContext } from 'react'
import { FrenchFries } from '../FoodData/Products'
import { useNavigate } from 'react-router-dom'
import { CartItemContext } from '../contextApi/CartItemContext';


const FrenchFriesCart = () => {
    const navigate = useNavigate();
    const {addToCart} = useContext(CartItemContext);
    return (
        <>
            <section className='food-section'>
                <div className="container">
                    <h2 className='food-header pt-3 text-center fw-bold ' id='pizzaFood'>French Fries</h2>

                    <div className="row">
                        {
                            FrenchFries.map((frenchFries) => (
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="card food-card  border-0 mb-3" key={frenchFries.id}>

                                        <img src={frenchFries.img} alt="" className='card-img-top food-img' />

                                        <div className="body  p-3">
                                            <div className="food-type ">
                                                <span
                                                    className={frenchFries.type ? "veg-symbol" : "nonveg-symbol"}
                                                >
                                                    <span className="food-dot"></span>
                                                </span>

                                                {/* <span className={food.veg ? "veg-text" : "nonveg-text"}>
                                                              {food.veg ? "Veg" : "Non-Veg"}
                                                          </span> */}
                                            </div>

                                            <h4 className='card-title food-name'>
                                                {frenchFries.name}
                                            </h4>

                                            <p className='food-description'>
                                                {frenchFries.description}
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center ">
                                                <p className='card-price'>
                                                    ₹{frenchFries.price}
                                                </p>
                                                <button className='food-add-btn btn' onClick={()=>addToCart(frenchFries,navigate)}
                                                    >Add 
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

export default FrenchFriesCart