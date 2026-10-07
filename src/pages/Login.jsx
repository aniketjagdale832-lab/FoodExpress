import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

      const navigate=useNavigate();
      const nameRef = useRef();
      const emailRef = useRef();
      const passRef = useRef();

       useEffect(()=>{
        const register = JSON.parse(localStorage.getItem("userRegister"));
        if(register === true){
            toast.success("Register Succssful");
            localStorage.removeItem("userRegister");
        }
       },[])


      function handlesubmit(e){
        e.preventDefault();
        // const name =nameRef.current.value;
        const email=emailRef.current.value;
        const pass =passRef.current.value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

      
        const user = users.find((u)=>(
            u.email === email && u.pass === pass

        ))
        if(user){
            
            localStorage.setItem("loggedIn",JSON.stringify(user));
            localStorage.setItem("isLogin","true");
            window.location.href = '/';
        }else{
            toast.error("Invalid email and password")
        }




      }


    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-5">
                    <div className="card shadow  mt-4 border-0 ">
                        <div className="card-header text-center bg-danger text-white">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Enter Name</label>
                                    <input type="text" className="form-control" ref={nameRef}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Email</label>
                                    <input type="email" className="form-control" ref={emailRef} />
                                </div>
                                <div className="mb-3">
                                   <label className="form-label">Enter Password</label>
                                   <input type="password" className="form-control" ref={passRef} />

                                </div>
                                <div className="mb-3 text-center ">
                                    <button className="btn btn-success" style={{width:"130px",fontSize:"25px"}} >Login</button>

                                </div>
                                <div className="mb-3">
                                    <p className=" text-center">new user?<Link className="text-decoration-none text-danger" to="/register">Register</Link> </p>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Login;