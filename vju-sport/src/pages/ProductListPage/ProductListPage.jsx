import React, { useEffect, useState } from "react";
import "./ProductListPage.css";
import ProductList from "../../components/ProductList/ProductList";
import SaleProductList from "../../components/SaleProductList/SaleProductList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const ProductListPage = () => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    // Fetch sale products
    fetch("https://676383e717ec5852cae91a1b.mockapi.io/sports-shop/api/v1/products")
      .then((response) => response.json())
      .then((data) => setSaleProducts(data))
      .catch((error) => console.error("Error fetching sale products:", error));

    // Fetch all products to get categories
    fetch("https://676383e717ec5852cae91a1b.mockapi.io/sports-shop/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        const categoriesData = data.reduce((acc, product) => {
          const { category, isFeatured } = product;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);

          if (isFeatured) {
            if (!acc["featured"]) {
              acc["featured"] = [];
            }
            acc["featured"].push(product);
          }
          return acc;
        }, {});
        setCategories(categoriesData);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="container background-ProductListPage mt-5">
        <div className="row">
          {/* Left Static Cards */}
          <div className="col-md-2 d-none d-md-block">
            <div className="static-card static-card-large mb-4">
              <img
                src="/assets/images/2.Messi.png"
                alt="Static Card 1"
                className="img-fluid"
              />
            </div>
            <div className="static-card static-card-small">
              <img
                src="/assets/images/3.CR7.jpg"
                alt="Static Card 2"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Sale Product List */}
          <div className="col-md-10">
            <SaleProductList products={saleProducts} />
          </div>
        </div>

        {/* Banner Section */}
        <div className="container mt-2 position-relative">
          <img
            src="/assets/images/1.LandingPage.png"
            alt="VJU SPORT Banner"
            className="img-fluid w-100 cover-image"
          />
          <div className="overlay-text">
            <h3>BẠN CÓ BIẾT?</h3>
            <p>
              Hơn <span className="highlight">10.000+</span> khách hàng đã tham gia, và mỗi ngày có đến
              <span className="highlight"> 300+</span> đơn hàng<br /> được thực hiện thông qua VJU SPORT.
            </p>
          </div>
        </div>

        {/* Product Lists */}
        {categories["featured"] && (
          <ProductList title="Sản phẩm nổi bật" products={categories["featured"]} />
        )}
        {Object.keys(categories).map(
          (category) =>
            category !== "featured" && (
              <ProductList
                key={category}
                title={category}
                products={categories[category]}
              />
            )
        )}

        {/* About Us Section */}
        <div className="about-us__container mt-3">
          <div className="about-us__left">
            <img
              src="/assets/images/1.LandingPage.png"
              alt="About Us"
              className="about-us__image"
            />
          </div>
          <div className="about-us__right">
            <h1 className="about-us__title">Về Chúng Tôi</h1>
            <p>
              Chào mừng đến với <strong className="vju-sport-red">VJU SPORT</strong>.<br /> Tại <strong className="vju-sport-red">VJU SPORT</strong>, chúng tôi đang
              thay đổi cách mua sắm đồ thể thao. Sứ mệnh của chúng tôi là mang đến trải nghiệm mua sắm liền mạch và thú vị cho mọi vận động viên.
            </p>
            <p className="semi-bold">Sứ Mệnh Của Chúng Tôi Là Gì?</p>
            <p>
              Chúng tôi cam kết mang lại sự tiện lợi và chất lượng trong việc mua sắm đồ thể thao. Với các sản phẩm hàng đầu và nhiều lựa chọn phong phú, chúng tôi đảm bảo bạn sẽ tìm thấy mọi thứ mình cần để nâng cao trải nghiệm tập luyện và thi đấu.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="partners__container mt-3">
          <h2 className="partners__title">Đối Tác Của Chúng Tôi</h2>
          <div className="partners__logos">
            <img
              src="/assets/images/LogoVjuBlack.png"
              alt="logo-VJU-Black"
              className="partners__logo"
            />
            <img
              src="/assets/images/LogoVNU.png"
              alt="Partner Logo-VNU"
              className="partners__logo"
            />
            <img
              src="/assets/images/LogoVjuColor.png"
              alt="Logo-VJU-Color"
              className="partners__logo"
            />
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="subscribe-container position-relative mt-2">
          <img
            src="/assets/images/Neymar.png"
            alt="VJU SPORT Banner"
            className="subscribe-image"
          />
          <div className="subscribe-content">
            <h3 className="subscribe-title">
              Bạn Có Muốn Nhận Được Những Ưu Đãi và Thông Tin Mới Nhất? Hãy Để Lại Thông Tin Nhé!
            </h3>
            <div className="subscribe-form">
              <input
                type="email"
                className="subscribe-input"
                placeholder="Example@gmail.com"
              />
              <button className="subscribe-button">Xác Nhận</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListPage;
