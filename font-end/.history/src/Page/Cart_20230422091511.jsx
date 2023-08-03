import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../Style/Cart.css";
import axios from "../Axios";
function Cart() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/carts/get");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="cart">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <p className="title">Menu Chungduc_ Restaurent</p>
      <h1>Cart</h1>
      {products &&
        carts?.data.map((cart) => (
          <form action="">
            <thead>
              <th>image dish</th>
              <th>name dish</th>
              <th>price dish</th>
              <th>quantily</th>
              <th>total price</th>
            </thead>
            <tbody>
              <tr>
                <td>{cart.imageUrl}</td>
                <td>{cart.nameDish}</td>
                <td>{cart.price}</td>
                <td>a</td>
                <td>a</td>
              </tr>
            </tbody>

            <div className="pay">
              <button className="btn" type="button">
                procced to checkout
              </button>
            </div>
          </form>
        ))}
    </div>
  );
}

export default Cart;
