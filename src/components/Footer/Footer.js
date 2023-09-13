import "./Footer.css";
import Image from "../../components/Footer/logo-strarbucks-fotor-bg-remover-202309131818.png";
import Instaimg from "../../components/Footer/instagram.png";
import Facebookimg from "../../components/Footer/facebook.png";
import Twiterimg from "../../components/Footer/twitter-sign.png";
import Appstore from "../../components/Footer/appstorei.png";
import Googlepay from "../../components/Footer/appstore.png";
export default function Navbar() {
    return (
        <div className="conatiner">
            <div className="container1">
                <div className="container2">
                    <img src={Image} className="footerimg"></img>

                </div>
                <div className="container3">
                    <h2>About Us</h2>
                    <p>Our Heritage</p>
                    <p>Coffeehouse</p>
                    <p>Our Company</p>


                </div>
                <div className="container4">
                    <h2>Responsibility</h2>
                    <p>Community</p>
                    <p>Ethical Sourcing</p>
                    <p>Environment</p>
                    <p>Diversity</p>

                </div>
                <div className="container5">
                    <h2>Quick Links</h2>
                    <p>Privacy Policy</p>
                    <p>Delivery</p>
                    <p>Season's Gifting</p>
                    <p>Careers</p>
                    <p>Customer Service</p>
                    <p>FAQs</p>

                </div>
                <div className="container6">
                    <h2>SOCIAL MEDIA</h2>
                    < div className="socialimg">
                        <img src={Instaimg} className="socialimg"></img>
                        <img src={Facebookimg} className="socialimg"></img>
                        <img src={Twiterimg} className="socialimg"></img>

                    </div>
                </div>

                <div className="container7">
                    <img src={Appstore} className=""></img>
                    <img src={Googlepay} className=""></img>
                </div>

            </div>

        </div>
    )
}