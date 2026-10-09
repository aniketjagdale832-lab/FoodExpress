import React, { useRef, useState } from 'react'
import {toast} from 'react-toastify'

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("loggedIn")))
  // const [contact,setContact]=useState("")
  // const [address,setAddress]=useState("")

  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const addressRef = useRef();

  const editProfile = (e) => {
    e.preventDefault();
    const editUser = {
      ...user,
      name: nameRef.current.value,
      email: emailRef.current.value,
      contact: contactRef.current.value,
      address: addressRef.current.value
    }

    localStorage.setItem("loggedIn", JSON.stringify(editUser))
    setUser(editUser);

    const exitingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUserData = exitingUsers.map((u) => {
      if (u.email === editUser.email) {
        return editUser;
      }
      return u;
    })
    localStorage.setItem("users", JSON.stringify(updatedUserData));
    toast.success("edit profile successful")


   




  }

  const cPassRef =useRef()
  const ccPassRef =useRef();
  const [showModal,setShowModal] =useState(false);

  const changePass = (p)=>{
    p.preventDefault();
    const cPass = cPassRef.current.value;
    const ccPass = ccPassRef.current.value;
    if(cPass != ccPass){
      toast.success("Please Enter same Password");
      return
    }
    if(user.pass === cPass && user.pass === ccPass){
      setShowModal(true);

      
      
    }else{
      toast.success("Please Enter Correct password")
    }


  }

   const newPassRef = useRef();
   const cNewPassRef =useRef();
   const changeNewPass = (p)=>{
    p.preventDefault();
    const newPass = newPassRef.current.value;
    const cNewPass = cNewPassRef.current.value;
    if(newPass != cNewPass){
      toast.success("Enter same Password")
      return      
    }

    const editPass = {
      ...user,
      pass:newPassRef.current.value,
    }

    localStorage.setItem("loggedIn",JSON.stringify(editPass))

    const exitingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedPass = exitingUsers.map((p)=>{
      if(p.email === editPass.email){
        return editPass;
      }
      return p;
    })
    localStorage.setItem("users",JSON.stringify(updatedPass));
    toast.success("Password Changed Successfully")
    setShowModal(false);
    
   


  }
    




  return (
    <>
      <div className='container mt-5'>
        <div className="row justify-content-between">

          <div className="col-lg-5 mb-3">
            <div className="card shadow border-0">
              <div className="card-header text-center  shadow bg-danger ">
                <h4 className='text-white display-6 fw-bold'>Profile Information</h4>
              </div>
              <div className="body mt-3 ms-2">
                <p>Name :-{user.name ? user.name : "Please Set Your Name"}</p>
                <p>Email :- {user.email}</p>
                <p>Contact :-{user.contact || "Please Enter Your Contect Number"}</p>
                <p>Address :-{user.address || "Please Enter Your Address"}</p>
                <div className=' text-center'>
                  <button className='btn btn-warning   mb-3' data-bs-toggle="modal" data-bs-target="#editProfile">Edit profile</button>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-5 ">
            <div className="card">
              <div className="card-header">
                <h4>Change Password</h4>
              </div>
              <div className="card-body">
                <form onSubmit={changePass}>
                  <div className="mb-3">
                    <label className='form-label'>Enter Current Password</label>
                    <input type="password" className='form-control' ref={cPassRef} />

                  </div>
                  <div className="mb-3">
                    <label className='form-label'>confirm Current Password</label>
                    <input type="password" className='form-control' ref={ccPassRef} />
                  </div>

                  <button  type="submit"className="btn btn-success w-100" >Change Password </button>

                </form>
              </div>
            </div>
          </div>




        </div>
        <div className="modal" id="editProfile">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header  text-white  bg-danger">
                <h5 className="modal-title fw-bold display-6">Edit Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={editProfile}>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-lable'>Enter Name</label>
                    <input type="text" className='form-control' name='name' defaultValue={user.name} ref={nameRef} />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-lable'>Enter Email</label>
                    <input type="email" className='form-control' name='email' defaultValue={user.email} ref={emailRef} />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-lable'>Enter Contact</label>
                    <input type="tel" className='form-control' name='contact' ref={contactRef} />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-lable'>Enter Address</label>
                    <input type="text" className='form-control' name='address' ref={addressRef} />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-info" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

          { showModal  && ( 
            <div className="modal show d-block">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header  text-white  bg-danger">
                    <h5 className="modal-title fw-bold display-6">Change Password</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={changeNewPass} >
                      <div className="mb-3">
                        <label className='form-label'>Enter New Password</label>
                        <input type="password"  className='form-control' ref={newPassRef}/>
                      </div>

                      <div className="mb-3">
                        <label className='form-label'>Confirm New Password</label>
                        <input type="password"  className='form-control' ref={cNewPassRef}/>
                      </div>

                      <div className="mb-3">
                        <button type="submit" className="btn btn-info" data-bs-dismiss="modal" >Change password</button>
                      </div>




                    </form>
                    
                  </div>

                </div>
              </div>
            </div>
          )}
      </div>

    </>
  )
}

export default Profile