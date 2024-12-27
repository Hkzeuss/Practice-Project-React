import React, { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("UK 4");

  const sizes = ["UK 13.5", "UK 1", "UK 1.5", "UK 2", "UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5"];
  
  return (
    <div className="product-page">
      <div className="product-page-container">
        {/* Left Section: Image Gallery */}
        <div className="image-section">
          <div className="main-image">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 2.png`}
              alt="Main Product"
            />
          </div>
          <div className="thumbnail-gallery">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 1.png`}
              alt="Thumbnail 1"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 3.png`}
              alt="Thumbnail 2"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 4.png`}
              alt="Thumbnail 3"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 5.png`}
              alt="Thumbnail 4"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 6.png`}
              alt="Thumbnail 5"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 7.png`}
              alt="Thumbnail 6"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 8.png`}
              alt="Thumbnail 7"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/5.anh san pham 9.png`}
              alt="Thumbnail 8"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="info-section">
          <h1 className="product-title">Nike Jr. Mercurial Superfly 10 Academy</h1>
          <p className="product-description">
          Biểu tượng tối thượng của tốc độ. Trở nên không thể chạm tới trên sân với giày đá bóng Nike Jr. Mercurial Superfly 10 Academy. Giày được tinh chỉnh để mang lại độ nhạy bén cao, với hệ thống bám sóng ở phần trước giúp tăng cường sự tương tác với mặt đất, tối đa hóa hiệu ứng Zoom Air, giữ bạn nhanh hơn lâu hơn. 
          </p>
          <div className="price">
            <span className="current-price">2.000.000 vnđ</span>
            <span className="original-price">2.500.000 vnđ</span>
          </div>

          {/* Size Selector */}
          <div className="size-section">
            <h3>Select Size</h3>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button className="add-to-bag">THÊM VÀO GIỎ</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
