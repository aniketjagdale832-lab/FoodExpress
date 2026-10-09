import React from 'react'
import './Menu.css'
import { Pizza } from '../FoodData/Products.js'

const Menu = () => {
    return (
        <>
            {/* ======================== Menu Hero section================================= */}
            <section className='menu-hero'>
                <div className="container text-center">
                    <p className='hero-small'>WELCOME TO FOOD EXPRESS  </p>
                    <h1> Explore Our <span>Delicious Menu</span> </h1>
                    <p className="hero-description"> Discover delicious meals, refreshing drinks and tasty snacks
                        delivered straightto your doorstep.
                    </p>

                </div>

            </section>

            {/* ==========================Search Menu====================== */}

            <section className="py-4 bg-light">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-md-4 col-lg-6">

                            <div className="input-group search-box">

                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search your favorite food..." />

                                <button className="btn btn-warning">
                                    Search
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================Categoty section======================= */}

            <section className='category-section bg-light'>
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-lg-12 text-center mb-3">
                            <div className="category-button">

                                <a href="#" className="category-btn active"> All </a>
                                <a href="#" className="category-btn">  Burger </a>
                                <a href="#" className="category-btn">  Pizza </a>
                                <a href="#" className="category-btn">  Biryani </a>
                                <a href="#" className="category-btn">  Rolls </a>
                                <a href="#" className="category-btn">  Snacks </a>
                                <a href="#" className="category-btn">  Drinks </a>



                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/*=========================================== Pizza Section========================================== */}
            <section>
                <div className="container">
                    <h2 className='mt-4 text-center'>Pizza</h2>

                    <div className="row">
                        {
                            Pizza.map((pizza)=>(
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="card menu-card  border-0">
                                        <img src={pizza.img} alt="" className='card-img-top menu-img'/>
                                        <div className="body  p-3">
                                            <div className="food-type ">
                                                <span
                                                    className={pizza.veg ? "veg-symbol" : "nonveg-symbol"}
                                                >
                                                    <span className="food-dot"></span>
                                                </span>

                                                {/* <span className={food.veg ? "veg-text" : "nonveg-text"}>
                                                    {food.veg ? "Veg" : "Non-Veg"}
                                                </span> */}
                                            </div>
                                            <h4 className='card-title menu-name'>{pizza.name}</h4>
                                            <p className='card-description'>{pizza. description}</p>
                                            <div className="d-flex justify-content-between align-items-center ">
                                            <p className='card-price'>₹{pizza.price}</p>
                                            <button className='btn btn-warning'>Add <i className="bi bi-cart-plus"></i> </button>
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

export default Menu