import React from 'react';

const EditProduct = ({ product }) => {

    

    console.log(product);

    const deleteProduct = id => {
            fetch(`https://safe-springs-46275.herokuapp.com/deleteProduct/${id}`,{
             method: 'DELETE',
             
            })
            .then(res => res.json())
            .then(result => {
              
            })
    }
    return (
        <div className="row mt-2">
            <div className="col-md-4">
                {product.name}
            </div>
            <div className="col-md-4"> ট {product.price}
            </div>
            <div className="col-md-4">
                <button className="btn btn-primary mr-5 mb-3">Edit</button>
                <button onClick={() => deleteProduct(product._id)} className="btn btn-primary mb-3">Delete</button>

            </div>

        </div>
    );
};

export default EditProduct;