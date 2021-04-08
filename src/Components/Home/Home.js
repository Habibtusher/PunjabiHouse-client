import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
       
        fetch('https://safe-springs-46275.herokuapp.com/products')
       
            .then(res => res.json())
            .then(data => {
                handleSpinner();
                setProduct(data)
            })
           
    }, [])
const handleSpinner = ()=>{
    document.getElementById('spinner').style.display="none";
    
}
    return (
        <div className="container ">
            <div class=" d-flex justify-content-center" >
                <div id="spinner" class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                </div>
            </div>
            <div className="row product">
                {
                    product.map(product => <Product product={product}></Product>)
                }

            </div>
        </div>

    );
};

export default Home;