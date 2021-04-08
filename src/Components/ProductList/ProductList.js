import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';


const ProductList = () => {
    const { id } = useParams();
    console.log(id);
    const history = useHistory()
    const [singleProduct, setSingleProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // useEffect(() => {
    //     fetch('https://safe-springs-46275.herokuapp.com/viewOrder?email='+loggedInUser.email,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setOrders(data));
    // }, []);
    useEffect(() => {
        fetch(`https://safe-springs-46275.herokuapp.com/checkout/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])


    const handleCheckout = (singleProduct) => {
        // console.log(singleProduct);
        history.push("/orders")
    }
    return (
        <div className="container">
            <h1>Checkout</h1>
            <div className="row mb-3 ">
                <div className="col-md-4">
                <h5>Name</h5>
                </div>
                <div className="col-md-4">
                <h5>Quantity</h5>
                </div>
                <div className="col-md-4">
                <h5>Price</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                {singleProduct.name}
                </div>
                <div className="col-md-4">
                <p>1</p>
                </div>
                <div className="col-md-4">
                ট{singleProduct.price}
                </div>
            </div>
            <button onClick={() => handleCheckout(singleProduct)} className="btn btn-primary">Checkout</button>
        </div>
    );
};

export default ProductList;