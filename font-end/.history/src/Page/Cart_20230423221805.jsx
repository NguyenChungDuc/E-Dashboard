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

      <p className="title">Menu Chungduc_ Restaurent</p>
      <h1>Cart</h1>
      <div className="pay_cart">
        <table>
          <thead>
            <th>image dish</th>
            <th>name dish</th>
            <th>price dish</th>
            <th>quantily</th>
            <th>total price</th>
          </thead>
        </table>
        <form action="">
          {carts &&
            carts?.data.map((cart) => (
              <tbody>
                <tr>
                  <td>
                    <img src={cart.imageUrl} />
                  </td>
                  <td>{cart.nameDish}</td>
                  <td>{cart.price}</td>
                  <td>
                    <button type="button">-</button>
                    <span>0</span>
                    <button type="button">+</button>
                    <button className="btn-remove" type="button">
                      Remove Dish
                    </button>
                  </td>
                  <td>0</td>
                </tr>
              </tbody>
            ))}
        </form>
        <div className="pay">
          <button className="btn" type="button">
            procced to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
