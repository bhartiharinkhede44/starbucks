import "./Footer.css";
import { Link } from "react-router-dom";
import Image from "../../components/Footer/logo-strarbucks-fotor-bg-remover-202309131818.png";
import Instaimg from "../../components/Footer/instagram.png";
import Facebookimg from "../../components/Footer/facebook.png";
import Twiterimg from "../../components/Footer/twitter.png";
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
                    <h2 >About Us</h2>
                    <p className="footercontain">Our Heritage</p>
                    <p className="footercontain">Coffeehouse</p>
                    <p className="footercontain">Our Company</p>


                </div>
                <div className="container4">
                    <h2 >Responsibility </h2>
                    <p className="footercontain">Community</p>
                    <p className="footercontain">Ethical Sourcing</p>
                    <p className="footercontain">Environment</p>
                    <p className="footercontain">Diversity</p>

                </div>
                <div className="container5">
                    <h2 >Quick Links </h2>
                    <p className="footercontain">Privacy Policy</p>
                    <p className="footercontain">Delivery</p>
                    <p className="footercontain">Season's Gifting</p>
                    <p className="footercontain">Careers</p>
                    <p className="footercontain">Customer Service</p>
                    <p className="footercontain">FAQs</p>

                </div>
                <div className="container6">
                    <h2>SOCIAL MEDIA</h2>
                    < div className="socialimg">
                        <Link to="https://www.instagram.com/starbucksindia/">
                        <img src={Instaimg} className="socialimg"></img></Link>
                       
                        <Link to="https://www.facebook.com/starbucksindia"><img src={Facebookimg} className="socialimg"></img></Link>
                        <Link to="https://twitter.com/starbucksindia">
                        <img src={Twiterimg} className="socialimg2"></img>
                        </Link>

                    </div>
                </div>

                <div className="container7">

                    <img src={Appstore} className="imglogo"></img>
                    <img src={Googlepay} className="imglogo"></img>

                </div>


            </div>
            <div className="footerline">

            </div>

            <span className="little-contain"> Web Accessibilty | Privacy Statement | Terms of Use | Contact Us </span>
            <span className="little-text">@2023 Starbucks Coffee Company.All rights  reseved.</span>

        </div>

    )
}