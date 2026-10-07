
import './Home.css'
import { Category } from '../FoodData/Category.js'
import { Products } from '../FoodData/Products.js'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

const Home = () => {

    useEffect(()=>{
        const userLoggedIn = JSON.parse(localStorage.getItem("isLogin"));
        if(userLoggedIn === true){
            toast.success("Login Successfully")
            localStorage.removeItem("isLogin")
        }

    },[])




    return (
        <>
            {/* ========================= Hero Section =========================== */}

            <section className='hero-section'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 hero-content py-2">

                            <p className='badge bg-white p-3 text-dark'>  <i className="bi bi-lightning-charge-fill"></i>Fresh Food & Fast Delivery</p>
                            <h1 className='display-4 text-danger fw-bold'>
                                Fresh Food,
                                <span className='text-success'> Fast Delivery!</span>
                            </h1>
                            <p className='text-muted'>
                                Enjoy delicious meals from your favorite restaurants.
                                Freshly prepared and delivered straight to your door.
                            </p>

                            <div className="hero-buttons mt-4">
                                <button className="btn btn-warning btn-lg">
                                    Explore Now <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>

                            <div className="hero-features d-flex flex-wrap gap-3 text-muted mt-4">
                                <div>
                                    <i className="bi bi-clock"></i>
                                    <span>Fast Delivery</span>
                                </div>

                                <div>
                                    <i className="bi bi-egg-fried"></i>
                                    <span>Fresh Food</span>
                                </div>

                                <div>
                                    <i className="bi bi-star-fill"></i>
                                    <span>Best Quality</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="col-12 col-lg-6">
                            <div className="hero-img">
                                <img
                                    src="/image/banner.jpg"
                                    alt="Delicious FoodExpress meals"
                                    className="hero-image"
                                />

                                <div className="delivery-card">
                                    <i className="bi bi-bicycle"></i>
                                    <div>
                                        <h5>Quick Delivery</h5>
                                        <p>Hot & fresh meals</p>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>
                </div>

            </section>


            {/* =============================== Categories =================================== */}
            <section className='categories bg-light mb-4'>

                <div className="container mt-5">

                    <div className="text-center ">
                        <h2 className="fw-bold">
                            Popular Categories
                        </h2>

                        <p className="text-muted">
                            Choose your favorite food
                        </p>

                    </div>


                    <div className="row g-4 justify-content-center mt-4 ">
                        {
                            Category.map((category) => (
                                <div className="col-4 col-sm-4 col-lg-2 mb-3" key={category.img}>
                                    <div className="card text-center shadow-sm category-card h-100 border-0 ">
                                        <img src={category.img} alt="" className='card-img-top category-img' />

                                        <div className="card-body">
                                            <h5 className='card-title'>{category.title}</h5>
                                        </div>

                                    </div>
                                </div>

                            ))
                        }


                    </div>
                </div>




            </section>


            {/*======================= Popular Food ========================= */}

            <section className='bg-light mt-5'>
                <div className="container">

                    <div className="text-center">
                        <h2 className='fw-bold'>
                            Popular Foods
                        </h2>
                        <p className='text-muted'>
                            Our customers' favorite dishes
                        </p>
                    </div>

                    <div className="row g-4">
                        {
                            Products.map((food) => (
                                <div className="col-6 col-md-4 col-lg-3" key={food.name}>
                                    <div className="card food-card shadow-sm h-100 border-0">
                                        <img src={food.img} className="card-img-top food-img" alt="Foods-img" />
                                        <div className="card-body">
                                            <div className="food-type">
                                                <span
                                                    className={food.veg ? "veg-symbol" : "nonveg-symbol"}
                                                >
                                                    <span className="food-dot"></span>
                                                </span>

                                                {/* <span className={food.veg ? "veg-text" : "nonveg-text"}>
                                                    {food.veg ? "Veg" : "Non-Veg"}
                                                </span> */}
                                            </div>

                                            <h5 className='card-title fw-bold'>{food.name}</h5>
                                            <p className='text-muted'>{food.description}</p>

                                            <div className="d-fiex justify-content-between ">
                                                {/* <h5 className='price'>₹{food.price}</h5> */}
                                                <button className='btn view-btn btn-warning'><Link to="/menu" className='text-decoration-none text-white fw-bold'>View</Link>

                                                    {/* <i className="bi bi-cart-plus"></i> */}
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


            {/* =========================== Offer Section================================== */}

            <section className=' py-5'>
                <div className="container offer-section rounded-4 p-5 ">
                    <div className="row ">
                        <div className="col-md-8">

                            <p className='badge bg-warning text-dark'>
                                Special Offer
                            </p>

                            <h2 className="fw-bold text-white">
                                Get 20% OFF on Your First Order!
                            </h2>

                            <p className="text-white">
                                Order delicious food and enjoy our special
                                welcome discount.
                            </p>
                            

                        </div>
                        <div className="col-md-4   mt-5  text-md-end">
                                <button className='btn btn-outline-warning text-white fw-bold '>
                                    Order Now
                                </button>
                        </div>

                    </div>
                </div>

            </section>

            {/* ================= WHY CHOOSE US  Section =============== */}

            <section className='mt-5 bg-light feature-section'>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className='fw-bold'>
                            Why Choose FoodExpress
                        </h2>
                        <p className='text-muted'>
                            We make food delivery simple and convenient
                        </p>
                    </div>

                    <div className="row text-center g-4">
                        <div className="col-4 col-md-4">
                             <i className="bi bi-lightning-charge-fill feature-icon"></i>
                             <h4 className='fw-bold mt-3'>
                                Fast Delivery
                            </h4>
                            <p className='text-muted'> Get your favorite food delivered quickly
                               to your doorstep.
                            </p>


                        </div>
                        <div className="col-4 col-md-4">
                              <i className="bi bi-star-fill feature-icon"></i>
                             <h4 className='fw-bold mt-3'>
                                Quality Food
                            </h4>
                            <p className='text-muted'> 
                                 Fresh ingredients and delicious meals
                                 prepared with care.
                            </p>


                        </div>

                        <div className="col-4 col-md-4">
                             <i className="bi bi-shield-check feature-icon"></i>
                             <h4 className='fw-bold mt-3'>
                                 Secure Payment
                            </h4>
                            <p className='text-muted'> 
                                  Easy and secure payment options
                                  for your orders.
                            </p>


                        </div>


                    </div>

                </div>

            </section>


            



        </>
    )
}
export default Home;