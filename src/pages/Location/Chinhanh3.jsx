import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

function Location3() {
  const [coffeeShop, setCoffeeShop] = useState(null);

  useEffect(() => {
    fetchCoffeeShop();
  }, []);

  const fetchCoffeeShop = async () => {
    try {
      const response = await axios.get(
        "https://thecoffeeshopstore.azurewebsites.net/api/CoffeeShops"
      );
      setCoffeeShop(response.data[0]);
    } catch (error) {
      console.error("Error fetching coffee shop data:", error);
    }
  };

  return (
    <div>
      <Header />
      {coffeeShop && (
        <div className="location">
          <div className="body-location">
            <div className="text-location-left">
              <h3>{coffeeShop.coffeeName}</h3>
              <p>
                Chúng tôi tự hào là một địa điểm thân thiện với gia đình, hoàn
                toàn phù hợp cho xe lăn và có đầy đủ tiện nghi thay đồ ngay
                trong khuôn viên.Vì vậy, nếu bạn đang tìm kiếm thời gian dành
                cho gia đình, thư giãn tối đa hay chỉ là một trải nghiệm độc đáo
                và thú vị thì Kitty Café là nơi dành cho bạn!
              </p>
              <p>{coffeeShop.description}</p>
              <br />
              <p> Số giấy phép - 136453</p>
              <Button
                variant="outlined"
                href="#outlined-buttons"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderColor: "#9e826c",
                  marginLeft: "600px",
                  marginBottom: "20px",
                  transition:
                    "background-color 0.3s, color 0.3s, border-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#755b47",
                    color: "black",
                    borderColor: "#755b47",
                    opacity: 0.8,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Link
                  to="/tablecoffeeshop3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Đặt bàn
                </Link>
              </Button>
            </div>
            <div className="text-location-right">
              <div className="column">
                <h4>Giờ mở cửa</h4>
                <p>Thứ 2-Chủ nhật: 8:00 AM</p>
              </div>
              <div className="column">
                <h4>Giờ đóng cửa</h4>
                <p>Thứ 2-Chủ nhật: 20:00 PM</p>
              </div>
              <div className="column">
                <h4>Liên hệ</h4>
                <p>Phone: {coffeeShop.phoneNumber}</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="img-location">
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
            </div>
          </div>
          <div className="column">
            <div className="img-location">
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
              {coffeeShop.image && (
                <img src={coffeeShop.image} alt="Coffee Shop Image" />
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Location3;
