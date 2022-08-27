import logo from '../logo.svg';
import './style.css';
import carrito from './img/carrito.png'
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <div className='navbarCont'>
            <div><img width={'100px'} src={logo}/></div>
            <div>
                <ul className='navbarText'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar;