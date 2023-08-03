import React from "react";
import { Link } from "react-router-dom";
import "../Style/Pay.css";
function Pay() {
  return (
    <div className="form-cart">
      <div className="background">
        <div className="pay-method">
          <h1>Payment orders</h1>
          <h2>Payment Methods</h2>
          <input type="radio" value="Male" name="gender" /> Credit Card
          <br />
          <input type="radio" value="Female" name="gender" /> Paypal
        </div>
        <form action="">
          <label htmlFor="">Name : </label>
          <input type="text" placeholder="" />
          <label htmlFor="">Email : </label>
          <input type="text" placeholder="" />
          <label htmlFor="">Address : </label>
          <input type="text" placeholder="" />
          <label htmlFor="">Credit Cart Number : </label>
          <input type="text" placeholder="" />
          <label htmlFor="">Security Code : </label>
          <input type="text" placeholder="" />
          <Link to="/">
            <button type="button">Submit Oder</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Pay;
