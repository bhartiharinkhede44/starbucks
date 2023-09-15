import './Order.css';
import Navbar from './../../components/Navbar/Navbar';
import OrderCard from '../../components/Card/OrderCard/OrderCard';
import Vegimg from './Img/veg.png'
import Coffieimg from '../../views/Order/Img/cofy.jpg';
import Coffieimg1 from '../../views/Order/Img/coffie1.jpg';
import Coffieimg2 from '../../views/Order/Img/coffie10.jpg';
import Coffieimg3 from '../../views/Order/Img/coffie11.jpg';
import Coffieimg4 from '../../views/Order/Img/coffie2.jpg';
export default function Order() {
    return (<>
        <Navbar />
        <div className=' d-flex flex-row'>
            <OrderCard Coffieimg={Coffieimg} Vegimg={Vegimg} NameOfCoffie=
                'Java Chip Frappuccino' Calaries='TALL(354 ML) .392 kcal' AboutCoffie='We blend mocha sauce and Frappuccino® chips with Frappuccino...' Price='₹ 367.50' />
            <OrderCard Coffieimg={Coffieimg1} Vegimg={Vegimg} NameOfCoffie=
                'Caffe Americano' Calaries='SHORT(237 Ml) .0 kcal' AboutCoffie='Rich in flavour, full-bodied espresso with hot water in true... ' Price='₹ 262.50' />
            <OrderCard Coffieimg={Coffieimg2} Vegimg={Vegimg} NameOfCoffie=
                'Caffe Americano' Calaries='SHORT(237 Ml) .0 kcal' AboutCoffie='Rich in flavour, full-bodied espresso with hot water in true... ' Price='₹ 262.50' />
      </div >
      <div className='d-flex flex-row' >
        <OrderCard Coffieimg={Coffieimg3} Vegimg={Vegimg} NameOfCoffie=
            'Cold coffee' Calaries='TALL(354 ML) .354 kcal' AboutCoffie='Our signature rich in flavour espresso blended with delicate... ' Price='₹ 362.25' />
        <OrderCard Coffieimg={Coffieimg4} Vegimg={Vegimg} NameOfCoffie=
            'Cold coffee' Calaries='TALL(354 ML) .354 kcal' AboutCoffie='Our signature rich in flavour espresso blended with delicate... ' Price='₹ 362.25' />
     </div >
    </>)
}