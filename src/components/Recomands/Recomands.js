import  './Recomands.css';
import vegimg from './veg.png'
export default function Recomands({imgesrc,nameofcard,}){
    return(<>
<div className='british-recomand-card'>
    <div className='inside-british-card'>
        <img src={imgesrc} ></img>
        <img src={vegimg}></img>
        <p>{nameofcard}</p>
    </div>
    <div className='third-div-of-british-card' ></div>
</div>
        </>)
}
