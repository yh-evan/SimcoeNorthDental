import React from "react";

const LoginForm = ({ isShowLogin }) => {
  return (
    <div className={`${!isShowLogin ? "active" : ""} showLogin`}>
      <div className="login-form">
        <div className="form-box solid">
          <img src="/img/Logo_with_name.png" alt="logo"></img>
          <form>
            <div className="login-row">
              <label>User Name:</label>
              <input type="text" name="username" className="login-box" />
            </div>
            <div className="login-row">
              <label>Password:</label>
              <input type="password" name="password" className="login-box" />
            </div>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
