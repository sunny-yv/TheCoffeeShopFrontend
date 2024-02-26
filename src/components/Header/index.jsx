import React from 'react'
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
function Header() {
  return (
    <div className="headers">
        <div className="header_left">
          <img src="../asset/logo2.png" alt="" />
        </div>
        <div className="header-center">
          <ul className="header-list">
            <li>
              <a href="/">TRANG CHỦ</a>
            </li>
            <li>
              <a href="/introductionpage">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="/location">CHI NHÁNH</a>
            </li>
            <li>
              <a href="#">THỰC ĐƠN</a>
            </li>
            <li>
              <a href="#">MÈO</a>
            </li>
            <li>
              <a href="/booking">ĐẶT BÀN</a>
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
              backgroundColor: "#230050",
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
  )
}

export default Header
