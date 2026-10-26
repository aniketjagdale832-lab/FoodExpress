import React, { useState } from 'react'
import './Menu.css'
import { Pizza, Burger, Sandwich, Momos, Paratha, Biryanis, Cakes, IceCreams, FrenchFries } from '../FoodData/Products.js'

import PizzaCart from '../cartPages/PizzaCart.jsx'
import BurgerCart from '../cartPages/BurgerCart.jsx'
import { useEffect } from 'react'
import { useRef } from 'react'
import SandwichCart from '../cartPages/SandwichCart.jsx'
import MomosCart from '../cartPages/MomosCart.jsx'
import ParathaCart from '../cartPages/ParathaCart.jsx'
import BiryaniCart from '../cartPages/BiryaniCart.jsx'



const Menu = () => {

    const searchRef = useRef();
    const [search,setSearch] =useState("");
    const [searchClicked, setsearchClicked] = useState(false);
    const [filteredFoods, setFilteredFoods] = useState([]);

    const [selectedCategory,setSeclectedCategory] = useState("all");

    const allMenu = [...Pizza, ...Burger, ...Sandwich, ...Momos, ...Paratha, ...Biryanis, ...Cakes, ...IceCreams, ...FrenchFries];

    const handleSearch  =() =>{
        setSearch(searchRef.current.value.trim().toLowerCase());
        setsearchClicked(true);
    }

    useEffect(() => {
       
         const result = allMenu.filter((foods) =>
            foods.name.toLowerCase().includes(search.toLowerCase().trim())
        );
        setFilteredFoods(result);
       


    },[search,searchClicked]);

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
                                    placeholder="Search your favorite food..." ref={searchRef} />

                                <button type="submit" className="btn btn-warning" onClick={handleSearch}>
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
                        <div className="col-12 text-center mb-3">
                            <div className="category-button">

                                {/* <a href="#" className="category-btn all-food active"> All </a> */}

                                <button className="category-btn all-food active" onClick={()=>setSeclectedCategory("all")}>
                                    All
                                </button>

                                <button className="category-btn" onClick={()=>setSeclectedCategory("burger")}>
                                    Burger
                                </button>

                                 <button className="category-btn" onClick={()=>setSeclectedCategory("pizza")}>
                                    Pizza
                                </button>

                                 <button className="category-btn" onClick={()=>setSeclectedCategory("shawarma")}>
                                    Shawarma
                                </button>

                                 <button className="category-btn" onClick={()=>setSeclectedCategory("sandwich")}>
                                    Sandwich
                                </button>

                                 <button className="category-btn" onClick={()=>setSeclectedCategory("paratha")}>
                                    Paratha
                                </button>

                                 <button className="category-btn" onClick={()=>setSeclectedCategory("cakes")}>
                                    Cakes
                                </button>

                                 <button className="category-btn" onClick={()=>setSeclectedCategory("biryani")}>
                                    Biryani
                                </button>

                                 <button className="category-btn" onClick={()=>setSeclectedCategory("momos")}>
                                    Momos
                                </button>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/*=========================================== Pizza Section========================================== */}



            {
                searchClicked ? (
                    <section className='food-section'>
                        <div className="container">
                            <h2 className='food-header pt-3 text-center fw-bold ' id='pizzaFood'></h2>

                            <div className="row">
                                {
                                    filteredFoods.map((food) => (
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
                                                    <h4 className='card-title food-name'>{food.name}</h4>
                                                    <p className='food-description'>{food.description}</p>
                                                    <div className="d-flex justify-content-between align-items-center ">
                                                        <p className='food-price'>₹{food.price}</p>
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

                ) : (

                    <>
                    <section>
                        {
                            (selectedCategory === "all" || selectedCategory === "pizza") && ( <PizzaCart />)
                        }

                        {
                            (selectedCategory === "all" || selectedCategory === "burger") && (<BurgerCart />)
                        }

                        {
                            (selectedCategory === "all" || selectedCategory === "sandwich") && (<SandwichCart />)
                        }

                        {
                            (selectedCategory === "all"  || selectedCategory === "momos") && (<MomosCart />)
                        }

                        {
                            (selectedCategory === "all" || selectedCategory === "paratha") && (<ParathaCart />)
                        }

                        {
                            (selectedCategory === "all" || selectedCategory === "biryani") && (<BiryaniCart />)
                        }
                        
                    </section>
                       
                        {/* <BurgerCart />
                        <SandwichCart />
                        <MomosCart />
                        <ParathaCart /> */}
                    </>
                )
            }





        </>
    )
}

export default Menu