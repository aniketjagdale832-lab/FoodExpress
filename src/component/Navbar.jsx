import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { toast } from 'react-toastify'




const Navbar = () => {

    const navigate = useNavigate()

    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")))

    function logout() {
        toast.success("Logout successful")
        setLoggedIn(null)
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("isLogin")
        navigate('/login')
    }

    

    




    return (
        <>

            <nav className='navbar navbar-expand-lg bg-white  shadow-sm sticky-top'>
                <div className="container-fluid d-flex align-items-center">


                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img
                            src='/image/food-express-img.png'
                            alt="FoodExpress logo"
                            width="50"
                            height="50"
                        />
                        <span className="logo-text">Food </span><span className="logo-text2">Express</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav"
                    >




                        <div className="navbar-nav  nav-links text-center ms-auto d-flex align-items-center" id="navbarNav">
                            <Link to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/cart">Cart</Link>

                            {
                                loggedIn && <Link  to="/profile">profile</Link>
                            }

                            {
                                loggedIn ? <button className='btn btn-danger' onClick={logout}>Logout</button> :
                                    <button className='btn btn-danger' onClick={() => navigate('/login')}>Login</button>

                            }
                        </div>
                    </div>
                </div>

               


            </nav>

            



        </>
    )
}
export default Navbar;