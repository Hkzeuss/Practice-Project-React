import React from "react";
import "./ProductList.css";

const ProductList = ({ title, products }) => {
  return (
    <div className="container">
      <h4 className="mb-4 tittle-product-list mt-3">{title}</h4>
      <div className="row g-3">
        {products.map((product, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-img"
              />
              <div className="product-info">
                <div className="price-row">
                  <span className="current-price">{product.currentPrice}</span>
                  <span className="original-price">{product.originalPrice}</span>
                </div>
                <h5 className="product-title">{product.title}</h5>
                <p className="product-desc">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
