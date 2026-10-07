import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Menu from './pages/Menu'

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
            }
        ]
    }

])
export default router;
