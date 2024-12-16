import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container-fluid text-center d-flex align-items-center justify-content-center vh-100 position-relative">
      <div className="logo">
        <h1>VJU SPORT</h1>
      </div>

      <div className="login-buttons">
        <Link to="/login" className="btn btn-secondary">Đăng Nhập</Link>
        <Link to="/register" className="btn btn-success">Đăng Ký</Link>
      </div>

      <div className="content">
        <h1 className="sport-title">Sport</h1>
        <p className="description">
          "Sẵn sàng cho trận đấu - Mua ngay tại VjuSport.com,<br />
          nơi những nhà vô địch tạo nên lịch sử!"
        </p>
        <div className="action-buttons">
          <Link to="/home" className="btn btn-primary">Mua ngay!</Link>
          <Link to="/home" className="btn btn-outline-light">Khám phá</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
