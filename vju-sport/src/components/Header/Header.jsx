import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMenu, IoCall } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [fullName, setFullName] = useState(""); // State lưu fullName

  useEffect(() => {
    // Lấy fullName từ localStorage
    const storedFullName = localStorage.getItem("fullName");
    if (storedFullName) {
      setFullName(storedFullName);
    }

    // Fetch categories
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://676383e717ec5852cae91a1b.mockapi.io/sports-shop/api/v1/products"
        );
        const data = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(
        "https://676383e717ec5852cae91a1b.mockapi.io/sports-shop/api/v1/products"
      );
      const data = await response.json();

      const filteredResults = data.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <nav className="nav-headerpage">
      <div className="Logo-headerpage d-flex">
        <Link to="/" className="text-decoration-none">
          <h6 className="custom-h6 font-weight-bold text-white mb-0">VJU SPORT</h6>
        </Link>
      </div>

      <div className="dropdown">
        <button
          className="custom-dropdown-toggle btn btn-secondary dropdown-toggle d-flex align-items-center"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <IoMenu />
          <span className="menu-text">Menu</span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link className="dropdown-item" to="/product-sale">
              Product Sale
            </Link>
          </li>
          {categories.map((category, index) => (
            <li key={index}>
              <Link className="dropdown-item" to={`/category/${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="Search-bar-wrapper">
        <div className="Search-bar d-flex align-items-center border rounded">
          <div className="search-icon px-2">
            <FaSearch />
          </div>
          <div className="search-input">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Bạn cần tìm gì?"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {searchQuery.trim() && searchResults.length > 0 && (
          <div className="search-results dropdown-menu show w-100 mt-1 p-2">
            {searchResults.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="dropdown-item d-flex align-items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="me-2"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-0">{product.title}</h6>
                  <p className="mb-0 text-muted">{product.currentPrice} đ</p>
                </div>
              </Link>
            ))}
          </div>
        )}
        {searchQuery.trim() && searchResults.length === 0 && (
          <div className="search-results dropdown-menu show w-100 mt-1 p-2">
            <p className="text-center text-muted">Không có sản phẩm phù hợp</p>
          </div>
        )}
      </div>

      <div className="Call-information">
        <IoCall />
        <p>
          Gọi mua hàng <br />
          1800.0244
        </p>
      </div>

      <div className="Nearby-store">
        <MdPlace />
        <p>Cửa hàng gần bạn</p>
      </div>

      <div className="Shopping-cart">
        <FaCartPlus />
        <p>Giỏ hàng</p>
      </div>

      <div className="Username-account">
        {/* Hiển thị fullName từ localStorage */}
        <h6>{fullName || "Tài khoản"}</h6>
      </div>
    </nav>
  );
};

export default Header;