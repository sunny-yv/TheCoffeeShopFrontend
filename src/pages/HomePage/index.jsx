import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function HomePage() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="home-page">
      <Header />
      {/* <div className="headers">
        <div className="header_left">
          <img src="../asset/logo3.png" alt="" />
        </div>
        <div className="header-center">
          <ul className="header-list">
            <li>
              <a href="/">TRANG CHỦ</a>
            </li>
            <li>
              <a href="#">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="#">CHI NHÁNH</a>
            </li>
            <li>
              <a href="#">THỰC ĐƠN</a>
            </li>
            <li>
              <a href="#">MÈO</a>
            </li>
            <li>
              <a href="/bookingnow">ĐẶT BÀN</a>
            </li>
            <li>
              <a href="#">THẺ</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <Button
            variant="outlined"
            href="#outlined-buttons"
            style={{
              backgroundColor: "#9e826c",
              color: "white",
              borderColor: "#9e826c",
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Đăng nhập
            </Link>
          </Button>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Tìm kiếm..." />
          </div>
        </div>
      </div> */}
      <div className="body">
        {/* <div className="slider-slick">
          <Slider {...settings}>
            <div className="image">
              <img src="../asset/meotrangchu.png" alt="" />
            </div>
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="image">
              <img src="" alt="" />
            </div>
          </Slider>
        </div> */}
        <div className="location">
          <img src="../asset/dots.png" alt="" />
          <h3>CHI NHÁNH</h3>
        </div>
        <div className="image-location">
          <img src="../asset/chinhanh1.webp" alt="" />
          <img src="../asset/chinhanh2.webp" alt="" />
        </div>
        <div className="product">
          <img src="../asset/dots.png" alt="" />
          <h3>SẢN PHẨM</h3>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="../asset/douong.jpeg" alt="" />
            <div className="text-card">
              <h4>Đồ uống</h4>
              <p>Đồ uống phong phú, tha hồ mà lựa chọn</p>
            </div>
          </div>
          <div className="card">
            <img src="../asset/douong.jpeg" alt="" />
            <div className="text-card">
              <h4>Đồ uống</h4>
              <p>Đồ uống phong phú, tha hồ mà lựa chọn</p>
            </div>
          </div>
          <div className="card">
            <img src="../asset/douong.jpeg" alt="" />
            <div className="text-card">
              <h4>Đồ uống</h4>
              <p>Đồ uống phong phú, tha hồ mà lựa chọn</p>
            </div>
          </div>
        </div>

        <div className="img-boss">
          <h3>HÌNH ẢNH CÁC BOSS TẠI CÁC CHI NHÁNH</h3>
          <img src="../asset/douong.jpeg" alt="" />

          <img src="../asset/douong.jpeg" alt="" />

          <img src="../asset/douong.jpeg" alt="" />

          <img src="../asset/douong.jpeg" alt="" />

          <img src="../asset/douong.jpeg" alt="" />

          <img src="../asset/douong.jpeg" alt="" />

          <img src="../asset/douong.jpeg" alt="" />

          <img src="../asset/douong.jpeg" alt="" />
        </div>
      </div>
      {/* <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Giới thiệu</h4>
              <ui className="list-unstyled">
                <li><a href="/">Sản Phẩm</a></li>
                <li><a href="/location">Cửa hàng</a></li>
              </ui>
            </div>

            <div className="col">
              <h4>Liên hệ</h4>
              <ui className="list-unstyled">
                <li>0987570351</li>
                <li>hanhnguyen@gmail.com</li>
               
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} COFFEE CAT | Mọi quyền được bảo lưu 
              | Điều khoản Dịch vụ | Quyền riêng tư
            </p>
          </div>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}

export default HomePage;
