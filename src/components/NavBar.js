import logo from '../logo.svg';
import logoropa from '../components/img/logoropa.png'
import './style.css';
import carrito from './img/carrito.png'
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navbarCont'>
            <Link to="/"><img width={'100px'} src={logoropa}/></Link>
            <div>
                <ul className='navbarText'>
                    <Link to="/">Inicio</Link>
                    <Link to="/products/buzos">Buzos</Link>
                    <Link to="/products/remeras">Remeras</Link>
                </ul>
            </div>
            <CartWidget/>
        </div>
    );
}

export default NavBar;