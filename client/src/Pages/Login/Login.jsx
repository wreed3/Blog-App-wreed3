import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-title">Log In</div>
      <div className="form">
        <form>
          <div className="from-group">
            <input
              className="form-control login-field"
              type="text"
              name="name"
              placeholder="username"
              required
            />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <br />
            <div className="login-button">
              <button id="reg" type="submit" className="btn btn-success">Log In</button>
            </div>
            <div className="register-button">
              <a href="/register" className="btn btn-secondary register-button">Register</a>
            </div>
            
          </div>
        </form>
      </div>
    </div>\
  );
}

export default Login;
