import './indexHome.css';
import Button from '../Button/Button';
function HomeCard({title, description , about, img , prize}) {
    return (
      <div className="home-card">
            <img src={img} className='bevarage'/>
          <h2 className='heading'>{title}</h2>
          <p className='about'>{about}</p>
          <p className='descript'>{description}</p>
          <span className='prize'> {prize} </span>
          <Button btnName="Add Item" CustomBtn="btn01" />
        
      </div>
    )
  }
  
  export default HomeCard;