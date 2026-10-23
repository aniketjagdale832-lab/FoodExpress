import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartItemContext } from '../contextApi/CartItemContext';

const ProductMenu = ({ title, product }) => {

    const navigate = useNavigate();
    const { addToCart } = useContext(CartItemContext);
    return (
        <>
            <section className='food-section'>
                <div className="container">
                    <h2 className='food-header pt-3 text-center fw-bold ' id='pizzaFood'>{title}</h2>

                    <div className="row">
                        {
                            product.map((food) => (
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="card food-card  border-0 mb-3">
                                        <img src={food.img} alt="" className='card-img-top food-img' />
                                        <div className="body  p-3">
                                            
                                            <div className="food-type ">
                                                <span
                                                    className={food.type ? "veg-symbol" : "nonveg-symbol"}
                                                >
                                                    <span className="food-dot"></span>
                                                </span>

                                            </div>

                                            <h4 className='card-title food-name'>
                                                {food.name}
                                            </h4>
                                            <p className='food-description'>
                                                {food.description}
                                            </p>

                                            <div className="d-flex justify-content-between align-items-center ">
                                                <p className='food-price'>
                                                    ₹{food.price}
                                                </p>
                                                <button className='food-add-btn btn ' onClick={() => addToCart(food, navigate)}>
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

export default ProductMenu