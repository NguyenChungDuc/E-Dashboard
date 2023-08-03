import React, { useState } from "react";
import axios from "../Components/Axios";
import "../Style/AddProduct.css";
function AddProduct() {
  const [nameDish, setNameDish] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);

  const addProduct = (e) => {
    e.preventeDefault();
    axios.post("/products/add", nameDish, imageUrl, price);
  };
  return (
    <div className="addproduct">
      <p className="title">Chungduc_ Restaurent Add Product</p>
      <form action="" className="form-addproduct">
        <h1>add products</h1>
        <label htmlFor="">Name Dish</label>
        <input
          value={nameDish}
          onChange={(e) => setNameDish(e.target.value)}
          type="text"
          placeholder="Enter new dish name"
        />
        <label htmlFor="">Image Url</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          placeholder="Paste link "
        />
        <label htmlFor="">Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter price"
        />
        <button type="button">add product</button>
      </form>
    </div>
  );
}

export default AddProduct;
