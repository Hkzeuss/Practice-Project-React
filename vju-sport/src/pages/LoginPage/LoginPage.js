import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Thêm state cho việc hiển thị mật khẩu

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập tại đây
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle giữa hiển thị mật khẩu và ẩn mật khẩu
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* Bên trái chứa form đăng nhập */}
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">Chào mừng trở lại</h2>
              <p className="card-title">Vui lòng nhập thông tin của bạn để tiếp tục</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"} // Thay đổi type giữa 'text' và 'password'
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleTogglePassword} // Gọi hàm toggle khi nhấn vào nút
                      style={{ height: "100%" }} // Đảm bảo icon có cùng chiều cao với input
                    >
                      <i
                        className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} // Đổi icon giữa eye và eye-slash
                        style={{ fontSize: "20px" }} // Cài đặt kích thước icon
                      ></i>
                    </button>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  Đăng nhập
                </button>
              </form>
              <div className="register-link">
                <span>Chưa có tài khoản? </span>
                <Link to="/register">Đăng ký ngay</Link>
              </div>
            </div>
          </div>

          {/* Bên phải chứa ảnh */}
          <div className="col-md-6 bg-image"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
