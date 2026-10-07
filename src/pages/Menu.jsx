import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <>
    {/* ======================== Menu Hero section================================= */}
    <section className='menu-hero'>
        <div className="container text-center">
            <p className='hero-small'>WELCOME TO FOOD EXPRESS </p>
            <h1> Explore Our <span>Delicious Menu</span> </h1>
            <p className="hero-description"> Discover delicious meals, refreshing drinks and tasty snacks 
                delivered straightto your doorstep.
            </p>
        
        </div>

    </section>

    {/* ==========================Search Menu====================== */}

    <section class="py-4 bg-light">

    <div class="container">

        <div class="row justify-content-center">

            <div class="col-md-10 col-lg-11">

                <div class="input-group search-box">

                    <span class="input-group-text">
                        <i class="bi bi-search"></i>
                    </span>

                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search your favorite food..."/>

                    <button class="btn btn-warning">
                        Search
                    </button>

                </div>

            </div>

        </div>

    </div>

</section>
    </>
  )
}

export default Menu