import logo from '../img/logo.webp';

function Header () {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="list-menu">
                <ul>
                    <li><a>Accueil</a></li>
                    <li><a>Services</a></li>
                    <li><a>Réalisation</a></li>
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