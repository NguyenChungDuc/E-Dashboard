import React from "react";
import "../Style/Pay.css";
function Pay() {
  return (
    <div className="form-cart">
      <h1>Payment orders</h1>
      <h2>Payment Methods</h2>
      <input type="radio" value="Male" name="gender" /> Credit Card
      <input type="radio" value="Female" name="gender" /> Paypal
      <form action="">
        <label htmlFor="">Name : </label>
        <input type="text" placeholder="" />
        <label htmlFor="">Email : </label>
        <input type="text" placeholder="" />
      </form>
    </div>
  );
}

export default Pay;
