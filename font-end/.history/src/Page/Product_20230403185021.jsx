import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../Style/Product.css";
import axios from "../Axios";
function Product() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="product">
      <Helmet>
        <title>Product</title>
      </Helmet>
      <p className="title">Menu Chungduc_ Restaurent</p>
      <h1>most popular foods</h1>
      {products &&
        products?.data.map((product) => {
          <section className="form">
            <form action="" className="form-food">
              <div className="food">
                <img src={product._id} alt="" />
                <p>Name Food : Chicken</p>
                <p>Price : 4.5$</p>
                <button type="button">add to cart</button>
              </div>
            </form>
          </section>;
        })}
    </div>
  );
}

export default Product;
