import React from "react";
import "./Gift.css";
import "./../../index.css";
import HeadImg from "./images/banner_icon_1_feafe78e1b.png";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Navbar from "../../components/Navbar/Navbar";

function Gift() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <HeaderCard
        HeaderImg={HeadImg}
        HeaderOne={"New Season, New Sips!"}
        HeaderTwo={"Autum Merchandise"}
        Description={
          "Embrace the Fall vibes as you sip in style with autummerchandise featuring super moon and bunny."
        }
        StartPriceTitle={"Starting Price"}
        Price={" ₹ 650"}
      />

      <section>
        <div className="horizontol-bar ">
          <div className="horizontal-bar-container d-flex justify-content-evenly">
            <div className="container">
              {" "}
              <div className=" d-flex  justify-content-center align-items-center text-center p-8">
                <p>FEATURE</p>
                <p>ANYTIME</p>
                <p>CONGRATULATION</p>
                <p>Thank You</p>

              </div>
            </div>

            <div className="container "></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gift;
