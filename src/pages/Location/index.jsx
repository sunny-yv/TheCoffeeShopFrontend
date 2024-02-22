import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function index() {
  return (
    <div class="location-one">
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
      <div class="text-location-left">
        <h3>Chi nhánh</h3>
        <p>
          Chúng tôi tự hào là một địa điểm thân thiện với gia đình, hoàn toàn
          phù hợp cho xe lăn và có đầy đủ tiện nghi thay đồ ngay trong khuôn
          viên.Vì vậy, nếu bạn đang tìm kiếm thời gian dành cho gia đình, thư
          giãn tối đa hay chỉ là một trải nghiệm độc đáo và thú vị thì Kitty
          Café là nơi dành cho bạn!
        </p>

        <br />
        <br />
        <p>Kitty Cafe Nottingham hiện chỉ có THẺ.</p>
        <br />
        <br />
        <p>
          Kitty Cafe có phí phúc lợi chỉ £7/người lớn và £5/trẻ em. Điều này cho
          phép chúng tôi duy trì các tiêu chuẩn cao về phúc lợi động vật cho mèo
          của chúng tôi
        </p>
        <br />
        <br />
        <p> Số giấy phép - 136453</p>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          style={{
            backgroundColor: "#9e826c",
            color: "white",
            borderColor: "#9e826c",
            marginLeft: "600px"
          }}
        >
          <Link
            to="/bookingnow"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Đặt bàn
          </Link>
        </Button>
      </div>
      <div class="text-location-right">
        <div className="column">
          <h4>Địa chỉ</h4>
          <p> 119 Nguyễn Thị Minh Khai, P. Bến Thành, Q.1</p>
        </div>
        <div className="column">
          <h4>Giờ mở cửa</h4>
          <p>Thứ 2 : 2:00pm to 9:30pm</p>
          <p>Thứ 3-Thứ 7: 1:00pm to 9:30pm</p>
          <p>Chủ nhật: 9:30 am to 10:00pm</p>
        </div>
        <div className="column">
          <h4>Liên hệ</h4>
          <p>Phone: 0961898942</p>
          <p>Email: CatfeVN@gmail.com</p>
        </div>
      </div>

      <div class="img-location">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default index;
