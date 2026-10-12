import React from 'react'
import './Menu.css'
import { Pizza } from '../FoodData/Products.js'
import PizzaCart from '../cartPages/PizzaCart.jsx'

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
                                <a href="#pizzaFood" className="category-btn">  Pizza </a>
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
         
            <PizzaCart />
            
           



        </>
    )
}

export default Menu