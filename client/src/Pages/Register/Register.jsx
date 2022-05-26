import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="form-container">
      <div className="register-title">Sign Up</div>
      <div className="form">
        <form>
          <div className="form-group">
            <input
              className="form-control textbox"
              type="email"
              name="email"
              placeholder="email"
              required
            />
            <input
              className="form-control textbox"
              type="text"
              name="name"
              placeholder="username"
              required
            />
            <input
              className="form-control textbox"
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <input
              className="form-control textbox"
              type="password"
              name="password"
              placeholder="verify password"
              required
            />
            <div className="reg-button">
              <a href="/newUser" className="form-control btn btn-success" type="submit">
                Register
              </a>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}
