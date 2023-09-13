import './Navbar.css';
import imglogo from './Navbarimges/starbucks.png';
export default function Navbar() {
    return (<>
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