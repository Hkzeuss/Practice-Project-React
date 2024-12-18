import React from "react";
import "./ProductListPage.css";
import ProductList from "../../components/ProductList/ProductList";
import SaleProductList from "../../components/SaleProductList/SaleProductList";
import Footer from '../../components/Footer/Footer';

const ProductListPage = () => {
  const saleProducts = [
    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },
    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng cao cấp",
      description: "Nike Phantom GX Elite DF FG",
      currentPrice: "2.000.000 VND",
      originalPrice: "2.500.000 VND",
    },
    
    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },
    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng cao cấp",
      description: "Nike Phantom GX Elite DF FG",
      currentPrice: "2.000.000 VND",
      originalPrice: "2.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },
    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng cao cấp",
      description: "Nike Phantom GX Elite DF FG",
      currentPrice: "2.000.000 VND",
      originalPrice: "2.500.000 VND",
    },
  ];

  const featuredProducts = [
    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ tự nhiên",
      description: "Adidas F50 Elite Laceless FG - Advancement Pack",
      currentPrice: "1.000.000 VND",
      originalPrice: "1.500.000 VND",
    },
  ];

  const artificialGrassShoes = [
    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },

    {
      image: "/assets/images/4.Product1.png",
      title: "Giày đá bóng sân cỏ nhân tạo",
      description: "Nike Mercurial Vapor 14 Academy TF",
      currentPrice: "800.000 VND",
      originalPrice: "1.200.000 VND",
    },
  ];

  return (
    <>
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

          {/* sale Product List */}
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
              <span className="highlight"> 300+</span> đơn hàng<br></br> được thực hiện thông qua VJU SPORT.
            </p>
          </div>
        </div>

        {/* Product Lists */}
        <ProductList title="Sản phẩm nổi bật" products={featuredProducts} />
        <ProductList title="Giày cỏ nhân tạo" products={artificialGrassShoes} />

        {/* About Us Section */}
        <div className="about-us__container mt-3">
          <div className="about-us__left">
            <img
              src="/assets/images/1.LandingPage.png" // Thay bằng đường dẫn ảnh của bạn
              alt="About Us"
              className="about-us__image"
            />
          </div>
          <div className="about-us__right">
            <h1 className="about-us__title">Về Chúng Tôi</h1>
            <p>
              Chào mừng đến với{" "}
              <strong className="vju-sport-red">VJU SPORT</strong>.<br></br> Tại{" "}
              <strong className="vju-sport-red">VJU SPORT</strong>, chúng tôi đang
              thay đổi cách mua sắm đồ thể thao. Sứ mệnh của chúng tôi là mang đến
              trải nghiệm mua sắm liền mạch và thú vị cho mọi vận động viên. Dù bạn
              cần trang phục, dụng cụ hay phụ kiện cho bóng đá, tennis, bóng rổ,
              bóng chuyền hay bất kỳ môn thể thao nào,{" "}
              <strong className="vju-sport-pink">VJU SPORT</strong> luôn có sẵn
              những sản phẩm chất lượng cho bạn.
            </p>
            <p className="semi-bold">
              Sứ Mệnh Của Chúng Tôi Là Gì?
            </p>
            <p>
              Chúng tôi cam kết mang lại sự tiện lợi và chất lượng trong việc mua
              sắm đồ thể thao. Với các sản phẩm hàng đầu và nhiều lựa chọn phong
              phú, chúng tôi đảm bảo bạn sẽ tìm thấy mọi thứ mình cần để nâng cao
              trải nghiệm tập luyện và thi đấu.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="partners__container mt-3">
          <h2 className="partners__title">Đối Tác Của Chúng Tôi</h2>
          <div className="partners__logos">
            <img
              src="/assets/images/LogoVjuBlack.png" // Logo 1
              alt="logo-VJU-Black"
              className="partners__logo"
            />
            <img
              src="/assets/images/LogoVNU.png" // Logo 2
              alt="Partner Logo-VNU"
              className="partners__logo"
            />
            <img
              src="/assets/images/LogoVjuColor.png" // Logo 3
              alt="Logo-VJU-Color"
              className="partners__logo"
            />
          </div>
        </div>


        {/* subscribe-section */}
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
