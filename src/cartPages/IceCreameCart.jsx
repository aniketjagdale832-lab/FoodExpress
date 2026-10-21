import React, { useContext } from 'react'
import { IceCreams } from '../FoodData/Products'

import { useNavigate } from 'react-router-dom'
import { CartItemContext } from '../contextApi/CartItemContext';

const IceCreameCart = () => {
    const navigate = useNavigate();
    const {addToCart} = useContext(CartItemContext);
    return (
        <>
            <section className='food-section'>
                <div className="container">
                    <h2 className='food-header pt-3 text-center fw-bold ' id='pizzaFood'>Ice Creame</h2>

                    <div className="row">
                        {
                            IceCreams.map((ice) => (
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="card food-card  border-0 mb-3" key={ice.id}>

                                        <img src={ice.img} alt="" className='card-img-top food-img' />
                                        <div className="body  p-3">
                                            <div className="food-type ">
                                                <span
                                                    className={ice.type ? "veg-symbol" : "nonveg-symbol"}
                                                >
                                                    <span className="food-dot"></span>
                                                </span>

                                                {/* <span className={food.veg ? "veg-text" : "nonveg-text"}>
                                                             {food.veg ? "Veg" : "Non-Veg"}
                                                         </span> */}
                                            </div>

                                             <h4 className='card-title food-name'>
                                                {ice.name}
                                            </h4>
                                            <p className='food-description'>
                                                {ice.description}
                                            </p>

                                            <div className="d-flex justify-content-between align-items-center ">
                                                <p className='card-price'>
                                                    ₹{ice.price}
                                                </p>
                                                <button className='food-add-btn btn ' onClick={()=>addToCart(ice,navigate)}>
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

export default IceCreameCart