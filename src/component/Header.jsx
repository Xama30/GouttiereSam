import logo from '../img/logo.webp';
import { Link } from "react-router-dom";


function Header () {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="list-menu">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Quand-laver-ses-gouttieres"><a>Réalisation</a></Link></li>
                    <li><Link to="/Informations">Informations</Link></li>
                    <li><a>Contactez-Nous</a></li>
                </ul>
            </div>
            <div className='menu-hamburger'>
                <div className='menu-hamburger'>
                    <div className='bars bar-1'></div>
                    <div className='bars bar-2'></div>
                    <div className='bars bar-3'></div>
                </div>
            </div>
        </header>
    );
}

export default Header;