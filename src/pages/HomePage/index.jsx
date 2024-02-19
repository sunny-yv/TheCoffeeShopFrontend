import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <div className="headers">
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
      </div>
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
    </div>
  );
}

export default HomePage;
