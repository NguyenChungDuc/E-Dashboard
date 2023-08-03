import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../Style/Cart.css";
import axios from "../Axios";
function Cart() {
  const [carts, setCarts] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/carts/get");
      const data = res.data.map((cart) => ({ ...cart, qty: 0, totalPrice: 0 }));
      setCarts(data);
    };
    fetchData();
  }, []);

  const increaseQty = (id) => {
    setCarts((prev) => {
      const indexUpdate = Array.from(prev).findIndex((x) => x._id === id);
      if (indexUpdate > -1) {
        prev[indexUpdate].qty++;
      }

      return [...prev];
    });
  };

  const decreaseQty = (id) => {
    setCarts((prev) => {
      const indexUpdate = Array.from(prev).findIndex((x) => x._id === id);
      if (indexUpdate > -1 && prev[indexUpdate].qty > 0) {
        prev[indexUpdate].qty--;
      }

      return [...prev];
    });
  };

  const removeItemCart = (id) => {
    setCarts(Array.from(carts).filter((x) => x._id !== id));
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
            <tr>
              <th>image dish</th>
              <th>name dish</th>
              <th>price dish</th>
              <th>quantily</th>
              <th>total price</th>
            </tr>
          </thead>
          {/* <form action=""> */}
          <tbody>
            {carts &&
              carts.map((cart, key) => (
                <tr key={key}>
                  <td>
                    <img src={cart.imageUrl} />
                  </td>
                  <td>{cart.nameDish}</td>
                  <td>{cart.price} $</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => decreaseQty(cart._id)}
                      disabled={cart.qty <= 0}
                    >
                      -
                    </button>
                    <span>{cart.qty}</span>
                    <button type="button" onClick={() => increaseQty(cart._id)}>
                      +
                    </button>
                    <button
                      className="btn-remove"
                      type="button"
                      onClick={() => removeItemCart(cart._id)}
                    >
                      Remove Dish
                    </button>
                  </td>
                  <td>0</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* </form> */}
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
