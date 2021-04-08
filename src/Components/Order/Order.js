import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
const Order = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://safe-springs-46275.herokuapp.com/viewOrder?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div className="container">
            <h1>Your Order List</h1>
            {
                orders.map(order => <div> <p>{order.name} 1 {order.price} </p></div>)
            }
 
        </div>
    );
};

export default Order;