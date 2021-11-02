import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/UserAuth";
import { userEmil } from "../../userEmil";

import "./Login.css";

function Login()
{
  const [email, setEmail] = useState("");
  const [passwod, setPassword] = useState("");
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = (e) =>
  {
    // e.preventDefault();

    if (
      email ||
      (email.trim() == userEmil.email) && passwod ||
      passwod.trim() == userEmil.password
    ) {
      localStorage.setItem("user", email);
      setUser({
        email,
        authenticated: true,
      });
      history.push("/");
    }
  };


  return (
    <div className="contanier">
      <h1> Login Form </h1>
      <form onSubmit={handleLogin}>
        <label> UserName or Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          name="email"
          required
        />
        <label> Password </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          name="password"
          required

        />
        <button type="submit" onSubmit={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
