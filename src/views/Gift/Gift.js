import React from "react";
import "./Gift.css";
import "./../../index.css";
import HeaderImg from "./images/banner_icon_1_feafe78e1b.png";
import Button from "../../components/Button/Button";

function Gift() {
  return (
    <>
    <div>
</div>
      <header>
        <div className="gift-card-header-container bg-green">
          <div className="gift-card-container border-radius">
            <div className="container d-flex align-items-center">
              <div className="card1">
                <div className="container d-flex  ">
                  <img src={HeaderImg} alt="" className="header-img" />
                  <div className="container  p-10">
                    <div className="d-flex flex-column">
                      <div className="p-10 ">
                        <p>New Season, New Sips!</p>
                      </div>
                      <div className="mt-10 ">
                        <h2>Autum Merchandise</h2>
                      </div>
                      <div className="mt-15">
                        <p className="fw-lighter">
                          Embrace the Fall vibes as you sip in style with autum
                          merchandise featuring super moon and bunny.
                        </p>
                      </div>
                      <div className="mt-22 ">
                        <p>starting From</p>
                        <h3> ₹ 650</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card2 d-flex ">
                <div className="btn-card1 " >

                </div>
                <div className="btn-card2">
                  <div className="custom-btn-margin p-8">

<Button btnName={"Order Now"}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Gift;
