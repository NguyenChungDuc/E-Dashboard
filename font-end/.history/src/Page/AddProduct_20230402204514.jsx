import React from "react";

function AddProduct() {
  return (
    <div className="addproduct">
      <p className="title">Chungduc_ Restaurent Add Menu</p>
      <form action="" className="form-addproduct">
        <h1>add products</h1>
        <label htmlFor="">Name Food</label>
        <input
          type="text"
          placeholder="
enter new dish name"
        />
      </form>
    </div>
  );
}

export default AddProduct;
