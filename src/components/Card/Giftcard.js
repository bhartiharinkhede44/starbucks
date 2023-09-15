import "./Giftcard.css";
import "./../../index.css";
import Button from "../Button/Button";

export default function Giftcard({GiftCardImg}) {
  return (
    <>
      <div className="giftcard-container border-radius border shadows mt-20">
        <div className="container d-flex justify-content-around">
          <div className="card1">
            <img src={GiftCardImg} alt="" className="gift-card-img d-block mx-auto" />
          </div>
          <div className="card2">
            <h5 className="gift-card-title">India Exclusive</h5>
            <p>Bring in the festive season and make each 
                celebration memorable.</p>
          <div className="btn">
          <Button btnName={"Order Now"} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
