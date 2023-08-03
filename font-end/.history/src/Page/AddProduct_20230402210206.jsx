import React from "react";
import "../Style/AddProduct.css";
function AddProduct() {
  return (
    <div className="addproduct">
      <p className="title">Chungduc_ Restaurent Add Product</p>
      <form action="" className="form-addproduct">
        <h1>add products</h1>
        <label htmlFor="">Name Dish</label>
        <input type="text" placeholder="Enter new dish name" />
        <label htmlFor="">Image Url</label>
        <input type="file" />
        <label htmlFor="">Price</label>
        <input type="text" />
        <button type="button">add product</button>
      </form>
    </div>
  );
}

export default AddProduct;
