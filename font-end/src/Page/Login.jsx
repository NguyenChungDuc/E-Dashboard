import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../Style/Login.css';
function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }
  // }, []);
  const handleLogin = async () => {
    // console.warn(email, password);
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem(
        'user' /*ten bien */,
        JSON.stringify(result) /*gia tri */
      );
      navigate('/');
    } else {
      alert('Please enter correct details !');
    }
    alert(`Wellcome ${result.name} login my page !`);
  };
  return (
    <div className="login">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form action="" className="form-login">
        <h1>Login</h1>
        <div className="user">
          <label htmlFor="">User name</label>
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
        <a className="remember_password" href="#">
          Forgot password ?
        </a>
        <button onClick={handleLogin} type="button" className="btn">
          Login
        </button>
        <Link className="signup" to="/signup">
          Or Sign Up Using
        </Link>
      </form>
    </div>
  );
}

export default Login;
