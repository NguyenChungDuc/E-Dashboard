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
                image={}
                <img
                  src="https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/5:4/w_3165,h_2532,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg"
                  alt=""
                />
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
