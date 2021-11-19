import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./LoginComponent.css";
import "font-awesome/css/font-awesome.min.css";

Axios.defaults.withCredentials = true;

const LoginForm = ({ isShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [role, setRole] = useState("customer");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
      role: role,
    }).then((response) => {
      console.log("BEFORE IF ");
      //if (!response.data.role) {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        localStorage.setItem("token", "Bearer " + response.data.token);
        setLoginStatus(true);
      }
    });
  };

  return (
    <div className={`${!isShowLogin ? "active" : ""} showLogin`}>
      <div className="login-form">
        <div className="form-box solid">
          <img src="/img/Logo_with_name.png" alt="logo"></img>
          <form>
            <div className="login-row">
              <label>User Name:</label>
              <input
                type="text"
                name="username"
                className="login-box"
                placeholder="&#xf007;  Enter your email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="login-row">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="login-box"
                placeholder="&#xf084;  Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="login-row roleSelection">
              <label>
                Role:
                <select
                  id="roleSelection"
                  name="role"
                  value={role.value}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value="customer">Customer</option>
                  <option value="doctor">Doctor</option>
                  <option value="manager">Manager</option>
                </select>
              </label>
            </div>
            <input
              type="submit"
              value="LOGIN"
              className="login-btn"
              onClick={login}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
