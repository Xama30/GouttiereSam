import '../App.css';
import logo from '../img/logo.webp';


function Footer(){
    return(
        <footer>
            <div className='logo--footer'>
                <img className="logo" src={logo} alt="logo entretien grondin"/>
            </div>
            <div className='containerText'>
                <div className="info info1">
                    <div className="adresse">
                        <h3>adresse :</h3>
                        <p>rive-sud, qc</p>
                        <p>J1G 1A2</p>
                    </div>
                    <div className="heures">
                        <h3>heures d'ouvertures :</h3>
                        <p>Lundi au vendredi</p>
                        <p>8h-17h</p>
                    </div>
                </div>
                <div className="info info2">
                    <div className="adresse">
                        <h3>Téléphone :</h3>
                        <a href='tel:1-888-852-6871'>1-888-852-6871</a>
                    </div>
                    <div className="heures">
                        <h3>Email :</h3>
                        <p>entretiengrondin@hotmail.com</p>
                    </div>
                    <div>
                        <h3>Suivez Nous :</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;