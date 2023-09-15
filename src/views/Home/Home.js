import './Home.css';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import imgs1 from './imgesforhomepage/Bestseller.jpg';
import imgs2 from './imgesforhomepage/CoffeeAtHome.jpg';
import imgs3 from './imgesforhomepage/Drinks.jpg';
import imgs4 from './imgesforhomepage/Food.jpg';
import imgs5 from './imgesforhomepage/Merchandise.jpg';
import imgs6 from './imgesforhomepage/ReadyToEat.jpg';
import HeaderCard from './../../components/HeaderCard/HeaderCard';
import pumpkinimg from './imgesforhomepage/pumpkin.png';
import imgeof from './imgesforhomepage/background.jpg';
import Button from '../../components/Button/Button';
import Recomands from '../../components/Recomands/Recomands';





export default function Home(){
    return(<>
    <Navbar/>
    <div className='heading-for-handcraft'><h2>Handcrafted Curations</h2>
    <div className='handcrafedt-inline'>
        <div   >
        <img src={imgs1}  className='handcrafted-img'></img>
        <p className='para'>Bestseller</p>
        </div>

        <div >
        <img src={imgs2} className='handcrafted-img'></img>
        <p>CoffeeAtHome</p>
        </div>

        <div >
        <img src={imgs3} className='handcrafted-img'></img>
        <p className='para'>Drinks</p>
        </div>

        <div >
        <img src={imgs4} className='handcrafted-img'></img>
        <p className='para'>Food</p>
        </div>

        <div >
        <img src={imgs5} className='handcrafted-img'></img>
        <p className='para'>Merchandise</p>
        </div>

        <div >
        <img src={imgs6} className='handcrafted-img'></img>
        <p className='para'>ReadyToEat</p>
        </div>
    </div>
    </div>

    <HeaderCard HeaderImg={pumpkinimg}
     HeaderOne={"Guess Whose Back!"} 
     HeaderTwo={"Pumpkin spice menu"}
     Description={
       "prepaire to rekindle autumn memories with the much-awaited return of the beloved pumpkin spice menu."
     }
     StartPriceTitle={"Starting Price"}
     Price={" ₹ 400.00"}
    />
{/*  */}


    {/*  */}
    {/* linera gradiant footer vala   */}
    <div className='world-of-coffee'>
      <h2 >Learn more about the world of coffee!</h2>
      <div className='backgroudn-img'>
        <h1>The Art And Science Of Sampling Coffee</h1>
        <p>Explore the world of Sampling coffee at Starbucks and uncover the Art and science  behind creating perfect coffee.</p>
        <Button btnName="learn more" CustomBtn="custombtn"/>
      </div>
    
    </div>
    {/* linera gradiant footer vala   */}

    <Footer/>

    </>)
}  
