import React, { useContext, useState } from 'react';
import './Product.css';
import {UserContext} from '../../App';
import {useHistory} from "react-router-dom";
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
const Product = ({product}) => {
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const [value,setValue] = useState();

const history = useHistory();


    const handleBuy = (product)=>{

        if(loggedInUser.email){

            const newBuy = {...loggedInUser,...product};
            console.log(newBuy);
            fetch('https://safe-springs-46275.herokuapp.com/buyList', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBuy)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                history.push('/productList')
        }

        else{
            history.push('/productList')
        }
      
       
       
    }
    return (

        <div className="col-md-3 col-sm-12 mb-3 shadow-sm p-3 bg-body rounded">
            <img style={{ height:'250px',  width:'95%',borderRadius: '10px',marginBottom: '10px' }} src={product.imageURL} alt=""/>
            <h5 style={{ marginBottom:'10px'}}>{product.name}</h5>
            <div style={{ width:'90%'}}>
                <div style={{ float: 'left',marginTop:'8px'}}> <h6 >ট {product.price}</h6> </div>
                <div style={{ float: 'right'}}><button onClick={() =>handleBuy(product)
               
                } className="btn btn-primary">Buy Now</button></div>
            </div>
            
            
        </div>
    );
};

export default Product;