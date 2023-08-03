const express = require("express");
const cors = require("cors");

require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const Cart = require("./db/Cart");

const app = express();

app.use(express.json());
app.use(cors());

// register
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});
//login
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "No user found" });
  }
});
// product add
app.post("/products/add", (req, resp) => {
  const productDetail = req.body;
  console.log("product =>", productDetail);
  Product.create(productDetail, (err, data) => {
    if (err) {
      resp.status(500).send(err.message);
      console.log(err);
    } else {
      resp.status(201).send(data);
    }
  });
});
//get product
app.get("/products/get", (req, resp) => {
  Product.find((err, data) => {
    if (err) {
      resp.status(500).send(err);
    } else {
      resp.status(200).send(data);
    }
  });
});

// add to cart
app.post("/carts/add", (req, resp) => {
  const productDetail = req.body;
  console.log("cart =>", productDetail);
  Cart.create(productDetail, (err, data) => {
    if (err) {
      resp.status(500).send(err.message);
      console.log(err);
    } else {
      resp.status(201).send(data);
    }
  });
});

// get cart
app.get("/carts/get", (req, resp) => {
  Cart.find((err, data) => {
    if (err) {
      resp.status(500).send(err);
    } else {
      resp.status(200).send(data);
    }
  });
});

// delete from cart
app.delete("/carts/:id", (req, res) => {
  console.log("a");
  const _id = req.params.id;
  console.log(_id);
  Cart.findOneAndRemove({ _id }, (err) => {
    if (err) {
      console.log(err);
      res.status(404).send("Cart not found");
    } else {
      res.status(200).send();
    }
  });
});

// update cart qty
app.put("/carts/:id", async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  const cart = await Cart.findOne({ _id });
  cart.qty = req.body.qty;
  Cart.updateOne(cart, (err) => {
    if (err) {
      res.status(404).send("Cart not found");
    } else {
      res.status(200).send();
    }
  });
});

app.listen(5000, () => console.log("server running on port 5000"));
