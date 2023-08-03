import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../Style/Cart.css";
import axios from "../Axios";
function Cart() {
  const [carts, setCarts] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/carts/get");
      const data = res.data.map((cart) => ({ ...cart, qty: 0 }));
      setCarts(data);
    };
    fetchData();
  }, []);

  const increaseQty = (id) => {
    setCarts((prev) => {
      const newState = prev;
      const item = Array.from(newState).find((x) => (x.id = id));
      if (item) item.qty++;

      return newState;
    });
  };

  const decreaseQty = (id) => {
    setCarts((prev) => {
      const newState = prev;
      console.log(newState);
      const item = Array.from(newState).find((x) => (x.id = id));
      if (item && item.qty > 0) item.qty--;

      return newState;
    });
  };

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
            carts.map((cart) => (
              <tbody>
                <tr>
                  <td>
                    <img src={cart.imageUrl} />
                  </td>
                  <td>{cart.nameDish}</td>
                  <td>{cart.price} $</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => decreaseQty(cart.id)}
                      disabled={cart.qty <= 0}
                    >
                      -
                    </button>
                    <span>{cart.qty}</span>
                    <button type="button" onClick={increaseQty(cart.id)}>
                      +
                    </button>
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
