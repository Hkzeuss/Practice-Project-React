import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://676383e717ec5852cae91a1b.mockapi.io/sports-shop/api/v1/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container container-fluid d-flex">
      {/* Hình ảnh sản phẩm */}
      <div className="product-image col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: "500px", objectFit: "contain" }}
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info col-md-6 d-flex flex-column justify-content-center">
        <h1 className="product-title">{product.title}</h1>
        <h2 className="product-price text-danger">{product.currentPrice} đ</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-size my-3">
          <label htmlFor="size-select" className="form-label">
            Size:
          </label>
          <select id="size-select" className="form-select w-50">
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary btn-add-to-cart w-50">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;