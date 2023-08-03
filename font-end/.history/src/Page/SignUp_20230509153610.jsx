import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import "../Style/SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
    alert(`Thank you ${name} for signing up for our website account`);
  };
  return (
    <div className="register">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <form action="" className="form-register">
        <h1>Register</h1>
        <div className="user">
          <label for="">User name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter the name ..."
          />
        </div>
        <div className="email">
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter the email ..."
          />
        </div>
        <div className="password">
          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter the password ..."
          />
        </div>
        <p>
          Already have an account <Link to="/login">login here</Link>{" "}
        </p>
        <button type="button" onClick={collectData} className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
