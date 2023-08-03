import React from "react";
import "../Style/Pay.css";
function Pay() {
  return (
    <div className="form-cart">
      <h1>Payment orders</h1>
      <form action="">
        <h2>Payment Methods</h2>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </form>
    </div>
  );
}

export default Pay;
