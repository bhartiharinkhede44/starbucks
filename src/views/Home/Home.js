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
// import HomeCard from './../../components/HomeCard/indexHome';
import './../../components/HomeCard/HomeCard.css';
import HomeCard from './../../components/HomeCard/indexHome';
import img1 from './../../components/HomeCard/bevarage01.png';
import img2 from './../../components/HomeCard/bevarage02.png';
import img3 from './../../components/HomeCard/bevarage03.png';
import traingle from './imgesforhomepage/traingle.webp';
import puff from './imgesforhomepage/pff.webp';
import choclate from './imgesforhomepage/cupcake.webp'







export default function Home() {
    return (<>
        <Navbar />
        <div className='heading-for-handcraft'><h2>Handcrafted Curations</h2>
            <div className='handcrafedt-inline'>
                <div   >
                    <img src={imgs1} className='handcrafted-img'></img>
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




        <div className='home-container'>
           <HomeCard img={img1} title="Pumpkin spice latte"  about="SHORT(237ML.216kcal) " description="Our signarture espresso 
            and steamed milk with the celebrated flavour combination of pumpkin , cinnamon , 
             nutmeg and... " prize="414.75/-" />


           <HomeCard img={img3} title="Pumpkin spice latte" about="TALL(Tall Pumpkin Spice Frappuccino).370 kcal "
            description="Our signarture espresso 
            and steamed milk with the celebrated flavour combination of pumpkin , cinnamon , 
             nutmeg and... " prize="414.75/-" />

           <HomeCard img={img2} title="Pumpkin spice latte" about="TALL(Tall Pumpkin Spice Brewed Coffee BREWED COFFEE).261 kcal " description="Our signarture espresso 
            and steamed milk with the celebrated flavour combination of pumpkin , cinnamon , 
             nutmeg and... " prize="414.75/-" />

       </div>

        

        
    
    

   
{/* british recomaded */}
<div className='barista-container'>
  <h2>Brista Recomended</h2>
<div className='d-flex justify-content-evenly '>
<Recomands imgesrc={traingle}  nameofcard='Hazelnut traingle' perspan='PER SERVICE (50g)-302 Kcal ' rupees=' ₹876'  /> 
<Recomands imgesrc={puff}  nameofcard='Buna Chicken puff' perspan='PER SERVICE (50g)-302 Kcal ' rupees=' ₹199'  />
<Recomands imgesrc={choclate}  nameofcard='Chocolate broweing cup cake ' perspan='PER SERVICE (50g)-302 Kcal ' rupees=' ₹299'  />
</div>
</div>
    {/* british recomanded */}
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



