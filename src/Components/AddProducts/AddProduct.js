import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddDelete from '../AddDelete/AddDelete';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
const [imageUrl,setImageUrl]= useState(null);
  
  const onSubmit = data => {
     const products={
       name: data.name,
       price: data.price,
       imageURL: imageUrl
     };
    const url =`https://safe-springs-46275.herokuapp.com/addProduct`


    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(products)
    })
.then(res=> {
  console.log('server side');
})
  }



  const handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '3ea6925d54a056d4dcb7a26c6292821b');
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      console.log(response.data.data.display_url);
      setImageUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  return (
    <div className="container">
      <div className="row">
        <div class="col-md-3 ">
         
       <AddDelete></AddDelete>
      
        </div>
        <div className="col-md-9">
          <h1>Add New Product</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name :</label>
            <br />
            <input name='name' {...register("name")} />
            <br />
            <label htmlFor="price">Price :</label>
            <br />
            <input name="price" {...register("price")} />
            <br />
            <label htmlFor="">Upload Image :</label>
            <br />
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
            <br />
            <input className='btn btn-outline-info pl-2 pr-2' type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;