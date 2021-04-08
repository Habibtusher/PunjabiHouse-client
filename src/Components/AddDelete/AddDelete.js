import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";
const AddDelete = () => {


  const history = useHistory();
  const addProduct = () => {
    history.push("/addProduct")
  }
  const manageProduct = () => {
    history.push("/manageProduct")
  }
  return (
    <div>
      <h2>Punjabi House </h2>
      <button className="btn btn-outline-info mt-5 pl-2 pr-2" style={{ width: '150px', padding: "5px", marginBottom: '20px' }} onClick={addProduct}>Add Product</button>
      <br />
      <button className="btn btn-outline-info pl-2 pr-2" style={{ width: '150px', padding: "5px" }} onClick={manageProduct}> Manage Product </button>

    </div>
  );
};

export default AddDelete;