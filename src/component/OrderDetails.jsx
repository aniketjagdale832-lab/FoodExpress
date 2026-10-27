import React from 'react'
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const {orderId} = useParams();
    const allOrders = JSON.parse(localStorage.getItem("orderItems")) || [];

    const orderDetails = allOrders.find(
        (order) => string(order.orderId) === String(orderId)
    )
  return (
    <>

    <section>
         <h2>order Details</h2>
        <div className='order'>
           {
            orderDetails.map((order)=>(
                <div className="row">
                    .col-lg-
                </div>
            ))
           }
           

        </div>

    </section>

    </>
  )
}

export default OrderDetails