import React from "react";
import { Helmet } from "react-helmet";
function Product() {
  return (
    <div className="product">
      <Helmet>
        <title>Product</title>
      </Helmet>
      <h1>most popular foods</h1>
    </div>
  );
}

export default Product;
