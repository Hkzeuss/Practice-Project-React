import React from "react";
import "../LandingPage/LandingPage.css"; // Import file CSS

const LandingPage = () => {
    return (
      <div className="container-fluid text-center d-flex align-items-center justify-content-center vh-100 position-relative">
        <div className="logo">
          <h1>VJU SPORT</h1>
        </div>
  
        <div className="login-buttons">
          <a href="/login" className="btn btn-secondary">Đăng Nhập</a>
          <a href="/register" className="btn btn-success">Đăng Ký</a>
        </div>
  
        <div className="content">
          <h1 className="sport-title">Sport</h1>
          <p className="description">
            "Sẵn sàng cho trận đấu - Mua ngay tại VjuSport.com,<br />
            nơi những nhà vô địch tạo nên lịch sử!"
          </p>
          <div className="action-buttons">
            <a href="/home" className="btn btn-primary">Mua ngay!</a>
            <a href="/home" className="btn btn-outline-light">Khám phá</a>
          </div>
        </div>
      </div>
    );
  };

export default LandingPage;