import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {

    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const cPassRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        const name = nameRef.current.value;
        const email= emailRef.current.value;
        const pass= passRef.current.value;
        const cPass=cPassRef.current.value;
          if (pass != cPass) {
          alert("Enter same Password");
          return
        }

         const user = {
            name: name,
            email: email,
            pass: pass,
        }
        const exitingUserData = JSON.parse(localStorage.getItem("users")) || [];

        exitingUserData.push(user)
        localStorage.setItem("users", JSON.stringify(exitingUserData));
        localStorage.setItem("userRegister","true");
        navigate('/login')

       

    }      

//     const user ={
//         name:nameRef.current.value,
//         email:emailRef.current.value,
//         pass:passRef.current.value,


//     }
//     const exitingUserData = JSON.parse(localStorage.getItem("users")) || [];
//     console.log(exitingUserData);
//     exitingUserData.push(user)
//     console.log(exitingUserData);
//     localStorage.setItem("users",JSON.stringify(exitingUserData));




// }
// function passRegister(){
//     const pass =passRef.current.value;
//     const cPass =confirmPassRef.current.value


//     if(pass === cPass){
//         alert("Register Successful")
//         window.location.href='/login'

//     }else{
//         alert("Enter Correct Password")
//     }


// }



return (
    <>
        <div className="row justify-content-center mt-5">
            <div className="col-lg-4">
                <div className="card shadow">
                    <div className="card-header text-center bg-info">
                        <h4>Register</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Enter Name</label>
                                <input type="text" className="form-control" ref={nameRef} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Enter Email</label>
                                <input type="email" className="form-control" ref={emailRef} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Enter Password</label>
                                <input type="password" className="form-control" ref={passRef} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Confirm Password</label>
                                <input type="password" className="form-control" ref={cPassRef} />
                            </div>
                            <div className="mb-3 text-center">
                                <button className="btn btn-success">Register</button>
                            </div>
                            <div className="mb-3 text-center">
                                <p>Already have an account?<Link className="text-decoration-none text-danger" to="/login">Login</Link> </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Register;