import './Navbar.css';
import imglogo from './Navbarimges/starbucks.png';
 export default function Navbar(){
    return(<>
    <header className='header '>
        <nav className='navbar'>
            <img src={imglogo} alt='logo img' className='logo-img'></img>
            <ul className='nav-list'>
                <li><a href='/' className='nav-link'>Home</a></li>
                <li><a href='/' className='nav-link'>Gift</a></li>
                <li><a href='/' className='nav-link'>Order</a></li>
                <li><a href='/' className='nav-link'>pay</a></li>
                <li><a href='/' className='nav-link'>Store</a></li>
            </ul>
        </nav>
        <div className=''>
           <button><i class="fa-solid fa-magnifying-glass"></i> <input></input></button>
           



        </div>
    </header>

    </>)
}