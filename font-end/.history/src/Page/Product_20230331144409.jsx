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
      <form action="" className="form-food">
        <div className="food">
          <img
            src="https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/5:4/w_3165,h_2532,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg"
            alt=""
          />
          <p>Name Food : Chicken</p>
          <p>Price : 4.5$</p>
          <button type="button">add to cart</button>
        </div>
      </form>
    </div>
  );
}

export default Product;
