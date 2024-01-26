import React, { useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () =>{
        alert("Login successful");
    }



  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center login-container">
      <div className="col-10 row g-0 align-items-center">
        <div className="d-none d-md-block col-6">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2275429855/display_1500/stock-vector-turkish-cat-with-coffee-cup-watercolor-vector-illustration-for-coffee-houses-can-be-used-for-menu-2275429855.jpg"
            alt=""
            className="img-fluid"
          />
        </div>

        <form className="col-12 col-md-6 col-6 py-4 px-3">
          <h4 className="login-title text-center py-2 mb-3">Login</h4>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <label htmlFor="password">Mật khẩu</label>
          </div>
          <div className="text-center">
            <button className="login-btn rounded-3" onClick={() => {handleLogin()}}>Login</button>
          </div>
          <div className="text-center mt-3">
            Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
