import Navbar from "./component/Navbar";
import {Outlet, ScrollRestoration} from "react-router-dom"

const App = ()=>{





  return(
    <>
    <ScrollRestoration />
    <Navbar />
    <Outlet />
   


    </>
  )
}
export default App;