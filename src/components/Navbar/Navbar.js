import './Navbar.css';
import imglogo from './Navbarimges/starbucks.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (<>
        <header className='header '>
            <nav className='navbar'>
                <img src={imglogo} alt='logo img' className='logo-img'></img>
                <ul className='nav-list'>
                    <li><Link to='/' className='nav-link'>Home</Link></li>
                    <li><Link to='/Gift' className='nav-link'>Gift</Link></li>
                    <li><Link to='/Order' className='nav-link'>Order</Link></li>
                    <li><Link to='/Pay' className='nav-link'>pay</Link></li>
                    <li><Link to='/Store' className='nav-link'>Store</Link></li>
                </ul>
            </nav>
            <div className='search-bar'>
                <div className='search-button'><i class="fa-solid fa-magnifying-glass"></i> <input placeholder='Looking for something specific?' className='search-box'></input></div>
                <div className='contact-icon'><i class="fa-regular fa-user"></i></div>

            </div>
        </header>
        <div className='second-header'>
            <p>Avail benefits!Sign up for My Starbucks Rewards.</p>
            <button>Know More</button>

        </div>

    </>)
}