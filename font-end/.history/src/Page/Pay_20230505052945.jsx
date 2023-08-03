import React from "react";
import "../Style/Pay.css";
function Pay() {
  return (
    <div className="form-cart">
      <h1>Payment orders</h1>
      <form action="">
        <h2>Payment Methods</h2>
        <input type="radio" value="Male" name="gender" />{" "}
        <span>Credit Card</span>
        <input type="radio" value="Female" name="gender" /> Paypal
      </form>
    </div>
  );
}

export default Pay;
