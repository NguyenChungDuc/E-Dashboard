import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import SignUp from "./Page/SignUp";
import Login from "./Page/Login";
import About from "./Page/About";
import Product from "./Page/Product";
import Cart from "./Page/Cart";
import Profile from "./Page/Profile";
import PrivateComponents from "./Components/PrivateComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./Page/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Cart />} />
            <Route path="/logout" element={<h1>5</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
