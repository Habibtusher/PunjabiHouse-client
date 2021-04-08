import React, { useEffect, useState } from 'react';
import AddDelete from '../AddDelete/AddDelete';
import EditProduct from '../EditProduct/EditProduct';

const Manage = () => {
    const [loadProduct,setLoadProduct] = useState([]);
    useEffect(() => {
        fetch('https://safe-springs-46275.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setLoadProduct(data))
    },[])
    return (
        <div className="container">
        <div className="row">
          <div class="col-md-3 ">
           
         <AddDelete></AddDelete>
      
          </div>
          <div className="col-md-9">
              
            <h1>Manage Products</h1>
            <div className="row mt-5">
                <div className="col-md-4">
                <h5 className="mb-3">Name</h5>
                </div>
                <div className="col-md-4">
                <h5 className="mb-3">Price</h5>
                </div>
              </div>
           
            
           {
               loadProduct.map(product => <EditProduct product={product}></EditProduct>)
           }

          </div>
        </div>
      </div>
    );
};

export default Manage;