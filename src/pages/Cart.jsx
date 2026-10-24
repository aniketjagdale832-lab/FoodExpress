import { useContext, useState } from "react";
import './Cart.css'
import { useNavigate } from "react-router-dom";
import { CartItemContext } from "../contextApi/CartItemContext";
import { toast } from "react-toastify";

const Cart = () => {


    const navigate = useNavigate();

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        clearCart
    } = useContext(CartItemContext)



    // const updateCart = (items) =>{
    //     setCartItems(items);
    //     localStorage.setItem("cartItems",JSON.stringify(items))
    // }


    const totalAmount = cartItems.reduce((sum,item)=>{
        return (sum += item.price * item.quantity)
    },0)
    

    const deliveryFee = totalAmount === 0 ? 0 :totalAmount< 300 ? 60 : totalAmount >300? 50 : 0;
    

    const discount = totalAmount > 1000 ? totalAmount *0.1 :totalAmount > 500 ? totalAmount * 0.05 :  0;
   
    const finalAmount = totalAmount + deliveryFee - discount;

    function ckeckout() {
       const loginUser = JSON.parse(localStorage.getItem("loggedIn"));
       if(!loginUser){
           toast.error("Please login to checkout!");
           navigate("/login");
           return;
       }
       if(cartItems.length === 0){
        toast.error("Your cart is empty!");
        return;
       }

       const newOrder={
        id:Date.now(),
        orderDate: new Date().toLocaleString(),
        items: cartItems.map(item => ({...item})),
        subtotal: finalAmount
       };

       const orders = JSON.parse(localStorage.getItem("orders")) || [];
       localStorage.setItem("orders", JSON.stringify([newOrder,...orders]));
       clearCart();
       toast.success("Order placed successfully!");
       navigate("/orders");
    }
       
       






    return (
        <>
            <section className="cart-section bg-light py-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="card menu-detail border-0 shadow-sm p-5">
                                <div className="cart-header">
                                    <h4 className="fw-bold">
                                        Your Items
                                    </h4>
                                    <hr />
                                </div>
                                <div className="table-responsive cart-table-wrapper">
                                <table className="table">
                                    <thead className="table-heading">
                                        <th>Product</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </thead>



                                    {

                                        cartItems.length === 0 ? (

                                            <tr>
                                                <td colSpan={6}>
                                                    <div className="card border-0 shadow-sm py-2 empty-card">


                                                        <h5 className="fw-bold">
                                                            🛒 Your Cart is empty
                                                        </h5>
                                                        <p>
                                                            Add some delicious food from our menu!
                                                        </p>
                                                        <td>
                                                            <button className="btn add-menu-btn" onClick={() => navigate('/menu')}>Add Menu</button>
                                                        </td>


                                                    </div>
                                                </td>


                                            </tr>




                                        ) : (
                                            cartItems.map((cartItems) => (

                                                <tbody className="table-body" key={cartItems.id}>
                                                    <tr>
                                                        <td className="pruduct-img">
                                                            <img src={cartItems.img} alt="" height={"65px"} width={"80px"} />
                                                        </td>
                                                        <td className="product-name pt-4">
                                                            {cartItems.name}
                                                        </td>
                                                        <td className="product-price pt-4 text-muted fw-bold fs-5 text-center">
                                                            ₹{cartItems.price}
                                                        </td>
                                                        <td className="pt-4 ">
                                                            <div className="input-group inc-dec-btn">
                                                            <button className="btn btn-outline-dark" onClick={() => decreaseQuantity(cartItems)}>
                                                                -
                                                            </button>
                                                            <input type="text" value={cartItems.quantity} className="input-value "  />
                                                            {/* {cartItems.quantity} */}

                                                            <button className="btn btn-outline-dark  fw-bold" onClick={() => increaseQuantity(cartItems)}>
                                                                +
                                                            </button>
                                                            </div>
                                                        </td>
                                                        <td className="product-total-price pt-4  fw-bold fs-5 text-center">
                                                            ₹{Number(cartItems.price) * cartItems.quantity}
                                                        </td>
                                                        <td className="pt-4 text-center">
                                                            
                                                            <button class="btn btn-sm btn-outline-danger " onClick={() => removeItemFromCart(cartItems)}>

                                                                <i class="bi bi-trash"></i>

                                                            </button>

                                                        
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                

                                            ))
                                            
                                        )
                                       
                                    }
                                    <tfoot className="table-footer">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center">Total</td>
                                        <td className="fw-bold fs-5 text-center"> ₹{totalAmount}</td>
                                        <td> </td>
                                    </tfoot>


                                </table>
                                </div>  


                            </div>

                        </div>


         {/* =============================================== order Summary Card =============================================== */}
                        <div className="col-lg-4 summary-card">
                            <div className="card border-0 shadow-sm ">
                                <div className="card-body order-summary p-4">
                                    <h3 className="fw-bold">Order summary</h3>
                                    <div className="d-flex justify-content-between mb-2">
                                        <h6>
                                            Subtotal
                                        </h6>
                                        <strong>
                                            ₹{totalAmount}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between mb-2">
                                        <h6>
                                            Delivery Fee
                                        </h6>
                                        <strong>
                                            ₹{deliveryFee}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between mb-2">
                                        <h6>
                                            Dscount
                                        </h6>

                                        <strong>
                                            ₹{discount.toFixed(2)}
                                        </strong>

                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between mb-2">
                                        <h5 className="fw-bold">
                                            Total Amount
                                        </h5>

                                        <h5 className="fw-bold">
                                            ₹{finalAmount.toFixed(2)}
                                        </h5>


                                    </div>
                                    <button
                                        className="btn btn-warning btn-lg w-100 fw-bold" onClick={ckeckout}>

                                        Proceed to Checkout
                                        <i className="bi bi-arrow-right"></i>

                                    </button>

                                    <p className="secure-text text-center mt-3">
                                        🔒 Safe and secure payment
                                    </p>

                                </div>


                            </div>

                        </div>
                    </div>

                </div >


            </section >




        </>

    )
}
export default Cart;