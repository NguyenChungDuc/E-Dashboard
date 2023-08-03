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
    </div>
  );
}

export default Product;
