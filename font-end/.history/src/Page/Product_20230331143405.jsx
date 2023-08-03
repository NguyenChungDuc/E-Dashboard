import React from "react";
import { Helmet } from "react-helmet";
import "../Style/Product.css";
function Product() {
  return (
    <div className="product">
      <Helmet>
        <title>Product</title>
      </Helmet>
      <p className="title">About Chungduc_ Restaurent</p>
      <h1>most popular foods</h1>
      <div className="food">
        <img src="" alt="" />
        <p>Chicken</p>
        <p>4.5$</p>
      </div>
    </div>
  );
}

export default Product;
