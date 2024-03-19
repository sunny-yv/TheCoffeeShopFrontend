import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SimpleSlider from "../../components/SimpleSlider";
import { Link } from "react-router-dom";

function HomePage() {
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Cats`
        );
        setCardData(response.data);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []); // Empty dependency array means it will only run once when the component mounts

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <SimpleSlider />
        <div className="location">
          <img src="../asset/dots.png" alt="" />
          <h3>CHI NHÁNH</h3>
        </div>
        <div className="image-location">
          <img src="../asset/meochinhanh01.jpg" alt="" />
          <img src="../asset/meochinhanh02.jpg" alt="" />
          <img src="../asset/meochinhanh3.jpg" alt="" />
          <img src="../asset/meochinhanh04.jpg" alt="" />
        </div>
        <div className="product">
          <img src="../asset/dots.png" alt="" />
          <h3>SẢN PHẨM</h3>
        </div>

        <div className="card-all">
          <Link to={"/drinks"}>
            <div className="card">
              <img src="../asset/douong.jpeg" alt="" />
              <div className="text-card">
                <h4>Đồ uống</h4>
                <p>Đồ uống phong phú, tha hồ mà lựa chọn</p>
              </div>
            </div>
          </Link>
          <Link to="/catproducts">
            <div className="card">
              <img src="../asset/thucanmeo1.jpg" alt="" />
              <div className="text-card">
                <h4>Thức ăn cho mèo</h4>
                <p>
                  Chọn một vài món ăn để có một buổi vui vẻ bên “hoàng thượng”
                  nào
                </p>
              </div>
            </div>
          </Link>
          <Link to="/catproducts">
            <div className="card">
              <img src="../asset/dochoimeo1.jpg" alt="" />
              <div className="text-card">
                <h4>Đồ chơi cho mèo</h4>
                <p>
                  Cùng nhau vui đùa với các bé mèo để có những phút giây thật
                  thoải mái nào
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="img-boss">
          <div className="title">
            <Link to="/allcat">HÌNH ẢNH CÁC BOSS TẠI CÁC CHI NHÁNH</Link>
          </div>
          <div className="image-home-page">
            {loaded
              ? cardData.map((card, index) => (
                  <div className="card-1" key={index}>
                    <Card sx={{ maxWidth: 500, height: 500 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="250px"
                          image={card.image}
                          alt="mèo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Boss:{card.catName}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            Tuổi:{card.age} tuổi
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            Chủng loại:{card.type}
                          </Typography>

                          <Typography variant="h6" color="text.secondary">
                            {card.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
