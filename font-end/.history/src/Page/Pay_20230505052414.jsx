import React from "react";
import "../Style/Pay.css";
function Pay() {
  return (
    <div className="form-cart">
      <h1>Payment orders</h1>
      <form action="">
        <h2>Payment Methods</h2>
        <input type="radio" name="gioitinh" checked="checked" > Nam 
        <input type="radio" name="gioitinh"> Nữ 
      </form>
    </div>
  );
}

export default Pay;
