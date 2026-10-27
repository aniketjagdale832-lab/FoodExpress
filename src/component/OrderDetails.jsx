import React from 'react'
import { useParams, Link } from 'react-router-dom';

const OrderDetails = () => {
    const { orderId } = useParams();
    const allOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

    const orderDetails = allOrders.find(
        (order) => String(order.orderId) === String(orderId)
    )

    const totalAmount = orderDetails.items.reduce((sum, item) => {
        return (sum += item.price * item.quantity)
    }, 0)

    return (
        <>

            <section>
                <div className="container py-5">
                    <div className="orders-heading">
                        <div>
                            <h2 className='fw-bold'>Orders Details</h2>
                            <h6 className='fw-bold'>Order Id : <span className='text-muted'>#{orderId}</span></h6>
                            <h6 className='fw-bold'>order Date :
                                <span className='text-muted'>
                                    {new Date(orderDetails.orderDate).toLocaleDateString()}
                                </span>
                            </h6>
                            <h6 className='fw-bold'>order Time:
                                <span className='text-muted '>
                                    {new Date(orderDetails.orderDate).toLocaleTimeString()}
                                </span>

                            </h6>

                        </div>

                        <Link to="/orders" className="order-shop-btn">
                            Close Details
                        </Link>


                    </div>

                    <div className='row mt-3 g-2'>
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm">
                                <h2 className='fw-bold m-3'>{ orderDetails.items.length > 1 ? "Items" : "Item"}</h2>
                                <hr />

                                <div className='table-responsive'>
                                    <table className="table text-center">
                                        <thead className="table-heading">
                                            <th> Product</th>
                                            <th> Name</th>
                                            <th> Price</th>
                                            <th> Qty</th>
                                            <th> Total</th>
                                        </thead>
                                        {
                                            orderDetails.items.map((item) => (
                                                <tbody>
                                                    <tr>
                                                        <td className="pruduct-img">
                                                            <img src={item.img} height={"75px"} width={"80px"} alt="" />
                                                        </td>
                                                        <td className="product-name pt-4">
                                                            {item.name}
                                                        </td>
                                                        <td className="product-price pt-4 text-muted fw-bold fs-5 text-center">
                                                            ₹{item.price}
                                                        </td>
                                                        <td className="pt-4 ">
                                                            {item.quantity}
                                                        </td>
                                                        <td className="product-total-price pt-4  fw-bold fs-5 text-center">
                                                            ₹{Number(item.price * item.quantity)}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ))
                                        }

                                        <tfoot className="table-footer">
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center">Total</td>
                                            <td className="fw-bold fs-5 text-center"> ₹{totalAmount}</td>
                                            
                                        </tfoot>
                                    </table>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <h3 className='fw-bold text-center'> Order Summary</h3>
                            </div>
                        </div>


                    </div>

                </div>



            </section>

        </>
    )
}

export default OrderDetails