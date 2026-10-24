import React, { useState } from 'react'
import './Orders.css'
import { Link } from 'react-router-dom'

const Orders = () => {
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || [])
    return (
        <>
            <section className='orders-page'>
                <div className='container'>

                    <div className="orders-heading mt-5 mb-4">
                        <div>
                            <h1>My Orders</h1>
                            <p>View your orders and track your deliveries.</p>
                        </div>

                        <Link to="/menu" className="order-shop-btn">
                            <i className="bi bi-plus-lg"></i> Order More
                        </Link>
                    </div>
                    <div className="orders-count-card">
                        <h6 className='text-muted'>Total Cards</h6>
                        <h3 className='fw-bold'>{orders.length}</h3>
                    </div>

                    {
                        orders.length === 0 ? (
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


                            <div className="order-list">
                                {orders.map((order) => (
                                    <div className="card border-0 shadow-sm mt-4" key={order.id}>
                                        <div className="card-body">
                                            <div className="row align-items-center g-3">

                                                {/* Column 1: Order ID */}
                                                <div className="col-12 col-md-3 order-details">
                                                    <h5>Order ID</h5>
                                                    <p>#{order.id}</p>
                                                    <p>{order.orderDate}</p>
                                                </div>

                                                {/* Column 2: Product Image and Details */}
                                                <div className="col-12 col-md-5 d-flex flex-column gap-3 product-details">
                                                    {order.items.slice(0, 3).map((item, index) => (
                                                        <div
                                                            className="d-flex align-items-center gap-3 mb-3"
                                                            key={`${item.id}-${index}`}
                                                        >
                                                            <img
                                                                src={item.img}
                                                                alt={item.name}
                                                                width="80"
                                                                height="80"
                                                                className="rounded object-fit-cover"
                                                            />

                                                            <div>
                                                                <h6>{item.name}</h6>
                                                                <p className="mb-1">
                                                                    Qty: {item.quantity}
                                                                </p>
                                                                <p className="mb-0">
                                                                    ₹{(item.price * item.quantity).toFixed(2)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {order.items.length > 3 && (
                                                        <p>+{order.items.length - 3} more items</p>
                                                    )}
                                                </div>

                                                {/* Column 3: Total and Buttons */}
                                                <div className="col-12 col-md-4 order-total">
                                                    <h6>Order Total</h6>
                                                    <h5>₹{(order.subtotal || 0).toFixed(2)}</h5>

                                                    <div className="d-flex flex-wrap gap-2 mt-3">
                                                        <button className="btn btn-outline-dark btn-sm">
                                                            Order Details
                                                        </button>

                                                        <button className="btn btn-outline-dark btn-sm">
                                                            Track Order
                                                        </button>

                                                        <button className="btn btn-outline-danger btn-sm">
                                                            Cancel Order
                                                        </button>
                                                    </div>
                                                </div>

                                            </div >
                                        </div >
                                    </div >
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