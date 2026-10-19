import { useState } from "react";
import './Cart.css'
import { useNavigate } from "react-router-dom";

const Cart = () => {


    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState
        (JSON.parse(localStorage.getItem("cartItems")) || []);



    // const updateCart = (items) =>{
    //     setCartItems(items);
    //     localStorage.setItem("cartItems",JSON.stringify(items))
    // }

    function increaseQuantity(cartItem) {

        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || []

        const updatedItems = existingItems.map((item) => {
            if (item.name === cartItem.name) {
                return { ...item, quantity: item.quantity + 1 }
            } return item;
        })


        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        setCartItems(updatedItems);
    }

    function decreaseQuantity(cartItem) {
        const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updateItems = existingItems.map((item) => {
            if (item.name === cartItem.name) {
                return ({ ...item, quantity: item.quantity - 1 });
            }
            return (item)
        })

        localStorage.setItem("cartItems", JSON.stringify(updateItems));
        setCartItems(updateItems);
    }

    const removeItemFromCart = (cartItem) => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updateCartItems = cartItems.filter(
            (item) => item.name !== cartItem.name);
        localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
        setCartItems(updateCartItems);

    }

    const totalAmount = cartItems.reduce((sum,item)=>{
        return (sum += item.price * item.quantity)
    },0)
    

    const deliveryFee = totalAmount === 0 ? 0 :totalAmount< 300 ? 60 : totalAmount >300? 50 : 0;
    

    const discount = totalAmount > 1000 ? totalAmount *0.1 :totalAmount > 500 ? totalAmount * 0.05 :  0;
   
    const finalAmount = totalAmount + deliveryFee - discount;




    return (
        <>
            <section className="cart-section bg-light py-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm p-5">
                                <div className="cart-hrader">
                                    <h4 className="fw-bold">
                                        Your Items
                                    </h4>
                                    <hr />
                                </div>
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

                                                <tbody className="table-body">
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


         {/* =============================================== order Summary Card =============================================== */}
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm ">
                                <div className="cord-body order-summary p-4">
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
                                        className="btn btn-warning btn-lg w-100 fw-bold">

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