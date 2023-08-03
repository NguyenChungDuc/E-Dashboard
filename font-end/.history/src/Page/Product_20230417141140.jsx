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
  const handleAddToCart = () => {
    
  };
  return (
    <div className="product">
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <p className="title">Menu Chungduc_ Restaurent</p>
      <h1>most popular foods</h1>
      <section className="form">
        {products &&
          products?.data.map((product) => (
            <form action="" className="form-food">
              <div className="food">
                <img src={product.imageUrl} alt="" />
                <p>Name Dish : {product.nameDish}</p>
                <p>Price : {product.price} $</p>
                <button onClick={handleAddToCart} type="button">
                  add to cart
                </button>
              </div>
            </form>
          ))}
      </section>
    </div>
  );
}

export default Product;
