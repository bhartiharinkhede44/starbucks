import './Pay.css';
import Navbar from './../../components/Navbar/Navbar';
import img01 from "./credite card.png"
import img02 from "./credite.png"
import img03 from "./discover card.png"
import img04 from "./visa card.png"


export default function Pay() {
    return (<>
        <Navbar />
        <div className='mainCard'>
            <h1 className='payHeading'>Payment </h1>
            <div className='imgBlock'>
                <img src={img01} className='imgcard'></img>
                <img src={img02}  className='imgcard'></img>
                <img src={img03}  className='imgcard'></img>
                <img src={img04}  className='imgcard'></img>
            </div>

            <p className='label'> Name On Card :</p> 
            <input type='text' className='inputbox'></input> <br></br>
            <p className='label' >  Card Number : </p> 
            <input type='text' className='inputbox'></input> <br></br>
            <p className='label'>Expiry Date : </p>
            <input type='date' className='inputbox'></input> <br></br>
            <p className='label'>  ZIP/ Postal Code:</p> 
            <input type='text' className='inputbox'></input> <br></br>
            <button className='paybtn'>Pay</button>

        </div>
    </>)
}