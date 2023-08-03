import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../Style/Product.css";
import axios from "../Axios";
function Product() {
  const [nameDish, setNameDish] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
    };
    fetchData();
  }, []);
  const handleAddToCart = (e, product) => {
    e.preventDefault();
    axios
      .post("/carts/add", 
      { 
        nameDish: product.nameDish, 
        imageUrl: product.imageUrl, 
        price, product.price })
      .then(() => {
        setNameDish("");
        setImageUrl("");
        setPrice(0);
      })
      .catch((error) => {
        alert(error.message);
      });
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
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  type="button"
                >
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
