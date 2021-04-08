import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';


const ProductList = () => {
    const [orders,setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://safe-springs-46275.herokuapp.com/viewOrder?email='+loggedInUser.email,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

const handleCheckout=() => {
    alert('Order Success')
}
    return (
        <div className="container">
            <h1>Checkout</h1>
            {
              orders.map(order =><div> <p>{order.name}   1   {order.price} </p></div>)
          }
         
          <button onClick={handleCheckout} className="btn btn-primary">Checkout</button>
        </div>
    );
};

export default ProductList;