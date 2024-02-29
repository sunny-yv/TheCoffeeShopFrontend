import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListAllCat from "../Cat/ListAllCat";
import { Link, useParams } from "react-router-dom";

import "./style.css";

function Cat() {
  return (
    <div className="cat-page">
      <Header />
      <Link to="/cat">Cat</Link>
      <div className="cat-text-1">
        <h1>Donna Coffee</h1>
      </div>

      <div
        className="album"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          className="CoffeeShop"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/allcat.jpg"
            alt="Các Boss của nhà Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/allcat"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Boss của nhà Donna
            </span>
          </a>
        </div>

        <div
          className="CoffeeShop"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/shop1.webp"
            alt="Các Boss của chi nhánh 1 nhà Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/catshop1"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Boss của chi nhánh 1 nhà Donna
            </span>
          </a>
        </div>

        <div
          className="CoffeeShop"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/shop2.jpg"
            alt="Các Boss chi nhánh 2 nhà Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/catshop2"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Các Boss chi nhánh 2 nhà Donna
            </span>
          </a>
        </div>

        <div
          className="CoffeeShop"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/shop3.jpg"
            alt="Các Boss chi nhánh 3 nhà Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/catshop3"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Các Boss chi nhánh 3 nhà Donna
            </span>
          </a>
        </div>

        <div
          className="CoffeeShop"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/shop4.png"
            alt="Các Boss chi nhánh 4 nhà Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/catshop4"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Các Boss chi nhánh 4 nhà Donna
            </span>
          </a>
        </div>

        <div
          className="CoffeeShop"
          style={{
            width: "25%",
          }}
        >
          <img
            src="asset/shop5.webp"
            alt="Các Boss chi nhánh 5 nhà Donna"
            style={{
              width: "360px",
              marginInline: "14%",
              height: "360px",
            }}
          />
          <a
            className="active"
            href="/catshop5"
            style={{
              position: "initial",
              width: "100%",
              display: "inline-block",
              color: "black",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "120%",
                margin: "12px",
              }}
            >
              Các Boss chi nhánh 5 nhà Donna
            </span>
          </a>
        </div>
      </div>

      <div className="clear"></div>
      <Footer />
    </div>
  );
}

export default Cat;
