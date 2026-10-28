import React, { useState } from 'react'
import './Orders.css'
import { Link, useNavigate } from 'react-router-dom'

const Orders = () => {

    const navigate = useNavigate();
   
    const [allOrders,setAllOrders] = useState(JSON.parse(localStorage.getItem("orderItems")) ||[])

    function viewDetails(order) {
    navigate(`/orders/${order.orderId}`)
  }

  const cancelOrder = (order)=>{
    const orders = JSON.parse(localStorage.getItem("orderItems")) || [];
    const updatedOrders = orders.filter((item)=> item.orderId !== order.orderId)
    localStorage.setItem("orderItems",JSON.stringify(updatedOrders));
    setAllOrders(updatedOrders)
  }
    return (
        <>
            <section className='orders-page'>
                <div className='container py-3'>

                    <div className="orders-heading mt-5 mb-4 shadow">
                        <div>
                            <h1>My Orders</h1>
                            <p>View your orders and track your deliveries.</p>
                        </div>

                        <Link to="/menu" className="order-shop-btn">
                            <i className="bi bi-plus-lg"></i> Order More
                        </Link>
                    </div>
                    <div className="orders-count-card">
                        <h6 className='text-muted'>Total Orders</h6>
                        <h3 className='fw-bold'>{allOrders.length}</h3>
                    </div>

                    {
                        allOrders.length === 0 ? (
                            <div className='card border-0 empty-orders mt-5 mb-5 p-4 d-flex flex-column justify-content-center align-items-center'>
                                <div>
                                    <h3>
                                        <i className="bi bi-bag-x"></i>
                                        No orders yet
                                    </h3>
                                    <p>Your placed orders will appear here.</p>
                                </div>

                                <Link to="/menu" className="order-shop-btn">
                                    Explore Menu
                                </Link>

                            </div>

                        ) : (


                            <div className="order-list ">
                                {allOrders.map((order) => (
                                    <div className="card border-0 shadow-sm mt-4" key={order.orderId}>
                                        <div className="card-body">
                                            <div className="row align-items-center g-3">

                                                {/* Column 1: Order ID */}
                                                <div className="col-6 col-lg-2">
                                                    <h5 className='fw-bold'>Order ID</h5>
                                                    <p>#{order.orderId}</p>
                                                    <h6 className='fw-bold'>order Date</h6>
                                                    <p>
                                                        {new Date(order.orderDate).toLocaleDateString()}
                                                    </p>
                                                    <p>
                                                        {new Date(order.orderDate).toLocaleTimeString()}
                                                    </p>
                                                </div>

                                                {/* Column 2: Products */}
                                                <div className="col-6 col-lg-5 scrollbar-hide ">
                                                    <div className=" " 
                                                    style={{
                                                        overflowX: "auto",
                                                        display: "flex",
                                                        flexWrap: "nowrap",
                                                        gap: "35px",
                                                    }}>
                                                        {order.items.map((item, index) => (
                                                            <div
                                                                className="d-flex flex-column"
                                                                key={`${item.id}-${index}`}
                                                            >
                                                                <img
                                                                    src={item.img}
                                                                    alt={item.name}
                                                                    width="100"
                                                                    height="100"
                                                                    className="rounded object-fit-cover"
                                                                />

                                                                <h6 className="mt-2 fw-bold">{item.name}</h6>
                                                                <p className="mb-1 text-muted">Qty: {item.quantity}</p>
                                                                <p className="mb-0 fw-bold">
                                                                    ₹{(item.price * item.quantity).toFixed(2)}
                                                                </p>
                                                            </div>
                                                        ))}

                                                    </div>
                                                </div>

                                                {/* Column 3: Total */}
                                                <div className="col-6 col-lg-2">
                                                    <h6 className='fw-bold'>Order Total</h6>
                                                    <h5>₹{(order.finalAmount || 0).toFixed(2)}</h5>
                                                </div>

                                                {/* Column 4: Buttons */}
                                                <div className="col-6 col-lg-3">
                                                    <div className="d-flex flex-wrap gap-2 orders-btn">
                                                        <button className="btn orders-detail btn-sm" onClick={()=>viewDetails(order)}>
                                                            <i className="bi bi-receipt"></i>
                                                            Order Details
                                                        </button>
                                                        <button className="btn track-order btn-outline-dark btn-sm">
                                                            <i className="bi bi-geo-alt"></i>
                                                            Track Order
                                                        </button>
                                                        <button className="btn cancel-order btn-sm " onClick={()=>cancelOrder(order)}>
                                                            <i className="bi bi-x-circle"></i>
                                                            Cancel Order
                                                        </button>
                                                    </div>  
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div >


                        )

                    }
                </div>

            </section>


        </>
    )
}

export default Orders