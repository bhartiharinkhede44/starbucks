import Button from '../Button/Button';
import './Recomands.css';
import vegimg from './veg.png'
export default function Recomands({ imgesrc, nameofcard, perspan, rupees }) {
    return (<>

        <div className='british-recomand-card custombtn'>
            

            <div className='inside-british-card d-flex  '>
                <img src={imgesrc} className='british-img' ></img>
                <div className='second-divsion'>  <img src={vegimg}></img>
                    <p>{nameofcard}</p>
                    <span>{perspan}</span>
                </div>
            </div>

            <div className='third-div-of-british-card d-flex ' >
                <span>{rupees}</span>
                <Button btnName='Add item' />
            </div>
        </div>
    </>)
}
