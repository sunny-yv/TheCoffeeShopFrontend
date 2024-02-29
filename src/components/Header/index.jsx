import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../contexts/auth";
import { useAuth } from "../../contexts/auth";
import "./style.css";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const navigate = useNavigate();
  const userData = useUserData();
  const { logout } = useAuth();
 

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

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
            <a href="#">GIỚI THIỆU</a>
          </li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              CHI NHÁNH
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/location">Chi nhánh 1</Dropdown.Item>
              <Dropdown.Item href="/location2">Chi nhánh 2</Dropdown.Item>
              <Dropdown.Item href="/location3">Chi nhánh 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <li>
            <a href="#">THỰC ĐƠN</a>
          </li>
          <li>
            <a href="/cat">MÈO</a>
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
        <div className="header">
          {userData ? (
            <>
              <Chip label={userData.email} color="primary" />
              <Button onClick={handleLogout}>Đăng xuất</Button>
            </>
          ) : (
            // <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
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
          )}
        </div>

        <div className="input-wrapper">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
    </div>
  );
}

export default Header;
