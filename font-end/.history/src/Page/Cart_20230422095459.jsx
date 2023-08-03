import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../Style/Cart.css";
import axios from "../Axios";
function Cart() {
  const [carts, setCarts] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/carts/get");
      setCarts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="cart">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <form action="">
        <p className="title">Menu Chungduc_ Restaurent</p>
        <h1>Cart</h1>
        <div className="pay">
          <table>
            <thead>
              <th>image dish</th>
              <th>name dish</th>
              <th>price dish</th>
              <th>quantily</th>
              <th>total price</th>
            </thead>
          </table>
          {carts &&
            carts?.data.map((cart) => (
              <tbody>
                <tr>
                  <td>
                    <img src={cart.imageUrl} />
                  </td>
                  <td>{cart.nameDish}</td>
                  <td>{cart.price}</td>
                  <td>a</td>
                  <td>a</td>
                </tr>
              </tbody>
            ))}
          <div className="pay">
            <button className="btn" type="button">
              procced to checkout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cart;
