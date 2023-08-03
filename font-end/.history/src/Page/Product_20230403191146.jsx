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
      {products &&
        products?.data.map((product) => (
          <section className="form">
            <form action="" className="form-food">
              <div className="food">
                <img src={product.imageUrl} alt="" />
                <p>Name Food :{product.nameDish}</p>
                <p>Price : {product.price}</p>
                <button type="button">add to cart</button>
              </div>
            </form>
          </section>
        ))}
      <p className="title">Menu Chungduc_ Restaurent</p>
      <h1>most popular foods</h1>;
    </div>
  );
}

export default Product;
