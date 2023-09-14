import React from "react";
import "./Gift.css";
import "./../../index.css";
import HeadImg from "./images/banner_icon_1_feafe78e1b.png";
import HeaderCard from "../../components/HeaderCard/HeaderCard";

function Gift() {
  return (
    <>
      <div></div>
      <HeaderCard HeaderImg={HeadImg} HeaderOne={"New Season, New Sips!"} HeaderTwo={"Autum Merchandise"} Description={"Embrace the Fall vibes as you sip in style with autummerchandise featuring super moon and bunny."} StartPriceTitle={"Starting Price"} Price={" ₹ 650"} />
    </>
  );
}

export default Gift;
