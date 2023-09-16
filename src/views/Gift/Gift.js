import React from "react";
import "./Gift.css";
import "./../../index.css";
import HeadImg from "./images/banner_icon_1_feafe78e1b.png";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Navbar from "../../components/Navbar/Navbar";
import Giftcard from "../../components/Card/Giftcard";
import GiftcardImg1 from "../../views/Gift/images/giftcard1.png";
import GiftcardImg2 from "../../views/Gift/images/giftcard2.png";
import GiftcardImg3 from "../../views/Gift/images/giftcard3.jpg";
import GiftcardImg4 from "../../views/Gift/images/giftcard4.png";
import GiftcardImg5 from "../../views/Gift/images/giftcard5.png";
import GiftcardImg6 from "../../views/Gift/images/giftcard6.png";

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
        bgClass={"bg-green"}
      />

      <section>
        <div className="horizontol-bar ">
          <div className="horizontal-bar-container d-flex justify-content-evenly">
            <div className="container">
              {" "}
              <div className=" d-flex horizontal-link-container p-8">
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

      <section>
        <div className="Anytime-container">
          <h1>Anytime</h1>
        </div>
        <hr />
      </section>

      <section className="d-flex justify-content-evenly mt-22">
        <Giftcard GiftCardImg={GiftcardImg1} />

        <Giftcard GiftCardImg={GiftcardImg2} />

        <Giftcard GiftCardImg={GiftcardImg3} />
      </section>
      <section className="d-flex justify-content-evenly mt-22">
        <Giftcard GiftCardImg={GiftcardImg4} />

        <Giftcard GiftCardImg={GiftcardImg5} />

        <Giftcard GiftCardImg={GiftcardImg6} />
      </section>
    </>
  );
}

export default Gift;
