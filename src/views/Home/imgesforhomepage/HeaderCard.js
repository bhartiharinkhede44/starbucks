import Button from '../Button/Button'
import './../../index.css'
import './../Card/Card.css'

export default function HeaderCard({HeaderImg , HeaderOne, HeaderTwo, Description, StartPriceTitle, Price}){
    return(
        <>

<div className="gift-card-header-container bg-green">
          <div className="gift-card-container border-radius">
            <div className="container d-flex align-items-center">
              <div className="card1">
                <div className="container d-flex  ">
                  <img src={HeaderImg} alt="" className="header-img" />
                  <div className="container  p-10">
                    <div className="d-flex flex-column">
                      <div className="p-10 ">
                        <p>{HeaderOne}</p>
                      </div>
                      <div className="mt-10 ">
                        <h2> {HeaderTwo}</h2>
                      </div>
                      <div className="mt-15">
                        <p className="fw-lighter">
                          
                          {Description}
                        </p>
                      </div>
                      <div className="mt-22 ">
                        <p> {StartPriceTitle}</p>
                        <h3>{Price}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card2 d-flex ">
                <div className="btn-card1 "></div>
                <div className="btn-card2">
                  <div className="custom-btn-margin p-8">
                    <Button btnName={"Order Now"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </>
    )
}