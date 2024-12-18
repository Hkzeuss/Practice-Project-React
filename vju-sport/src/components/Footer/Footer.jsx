import React from 'react';
import './Footer.css';  // Đảm bảo bạn đã import Footer.css

const Footer = () => {
  return (
    <footer className="footer mt-2">
      <div className="footer-container">
        {/* Logo và Tiêu đề */}
        <div className="footer-section">
          <h2 className="footer-title">VJU SPORT</h2>
          <img 
            src="/assets/images/LogoVjuColor.png" 
            alt="Vietnam Japan University Logo" 
            className="footer-logo" 
          />
        </div>

        {/* Khám Phá */}
        <div className="footer-section">
          <h3 className="footer-section-title">Khám Phá</h3>
          <ul className="footer-list">
            <li><a href="/">Trang Chủ</a></li>
            <li><a href="/shop">Mua Sắm Đồ Thể Thao</a></li>
            <li><a href="/partners">Đối Tác</a></li>
            <li><a href="/about-us">Về Chúng Tôi</a></li>
            <li><a href="/contact">Liên Hệ Chúng Tôi</a></li>
          </ul>
        </div>

        {/* Dịch Vụ Khách Hàng */}
        <div className="footer-section">
          <h3 className="footer-section-title">Dịch Vụ Khách Hàng</h3>
          <ul className="footer-list">
            <li><a href="/faq">Câu Hỏi Thường Gặp</a></li>
            <li><a href="/privacy-policy">Chính Sách Bảo Mật</a></li>
            <li><a href="/terms">Điều Khoản & Điều Kiện</a></li>
            <li><a href="/support">Hỗ Trợ</a></li>
          </ul>
        </div>

        {/* Hợp Tác */}
        <div className="footer-section">
          <h3 className="footer-section-title">Hợp Tác</h3>
          <ul className="footer-list">
            <li><a href="/partnership">Hợp Tác Với Chúng Tôi</a></li>
            <li><a href="/benefits">Lợi Ích Khi Hợp Tác</a></li>
            <li><a href="/partner-login">Đăng Nhập Đối Tác</a></li>
          </ul>
        </div>

        {/* Liên Hệ */}
        <div className="footer-section">
          <h3 className="footer-section-title">Liên Hệ</h3>
          <p>Email: <a href="mailto:support@vjusport.com">support@vjusport.com</a></p>
          <p>Điện thoại: <a href="tel:+84362195258">+84 362 195 258</a></p>
          <p>
            Địa chỉ: Đường Lưu Hữu Phước, Phường Cầu Diễn,
            <br />
            Quận Nam Từ Liêm, Hà Nội
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; 2024 VJU SPORT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
