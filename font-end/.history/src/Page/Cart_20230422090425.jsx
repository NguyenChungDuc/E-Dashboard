import React from "react";
import { Helmet } from "react-helmet";
import "../Style/Cart.css";
import axios from "axios";
function Cart() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
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
        <table>
          <thead>
            <th>image dish</th>
            <th>name dish</th>
            <th>price dish</th>
            <th>quantily</th>
            <th>total price</th>
          </thead>
          <tbody>
            <tr>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
          </tbody>
        </table>
        <div className="pay">
          <button className="btn" type="button">
            procced to checkout
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cart;
