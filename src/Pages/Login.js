import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";
import { db, auth } from "../firebase";

import "../styles/Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //some fancy firebase login action

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => console.log(err.message));
  };
  const register = (e) => {
    e.preventDefault();

    //some fancy firebase register action

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="logo" className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signinButton"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>

        <p>
          By using the Amazon Services, you agree, on behalf of yourself and all
          members of your household and others who use any Service under your
          account, to the following conditions.
        </p>
        <button className="login__registerButton" onClick={register}>
          Creata Your Amazaon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
