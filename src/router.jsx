import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Menu from './pages/Menu'
import PizzaCart from './cartPages/PizzaCart'
import BurgerCart from './cartPages/BurgerCart'
import BiryaniCart from './cartPages/BiryaniCart'
import SandwichCart from './cartPages/SandwichCart'
import CakesCart from './cartPages/CakesCart'
import MomosCart from './cartPages/MomosCart'
import ParathaCart from './cartPages/ParathaCart'
import ShawarmaCart from './cartPages/ShawarmaCart'
import IceCreameCart from './cartPages/IceCreameCart'
import FrenchFriesCart from './cartPages/FrenchFriesCart'
import Orders from './pages/Orders'
 import Orders2 from '../../ReactDay4/src/Orders2'


const router = createBrowserRouter([

    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path:'/menu',
                element:<Menu />
            },
            {
                path:'/orders',
                element:<Orders />

            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element: <Register />
            },
            {
                path:'/profile',
                element:<Profile />
            },
            {
                path:'/pizza',
                element:<PizzaCart />
            },
            {
                path:'/burger',
                element:<BurgerCart />
            },
            {
                path:'/biryani',
                element:<BiryaniCart />
            },
            {
                path:'/sandwich',
                element:<SandwichCart />
            },
            {
                path:'/cakes',
                element:<CakesCart />
            },
            {
                path:'/momos',
                element:<MomosCart />
            },
            {
                path:'/paratha',
                element:<ParathaCart />
            },
            {
                path:'/shawarma',
                element:<ShawarmaCart />
            },
            {
                path:'/ice-creame',
                element:<IceCreameCart />
            },
            {
                path:'/french-fries',
                element:<FrenchFriesCart />
            }

        ]
    }

])
export default router;
