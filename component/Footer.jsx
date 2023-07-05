import logo from '../public/logo.webp';
import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook);

function Footer(){
    return(
        <footer>
            <div className='logo--footer'>
                <Image
                    src={logo}
                    alt="logo des entretiens Grondin dans la Rive-Sud"
                    placeholder="blur"
                />
            </div>
            <div className='containerText'>
                <div className="info info1">
                    <div className="adresse">
                        <h3>adresse :</h3>
                        <p>rive-sud de montréal, qc</p>
                        <p>J1G 1A2</p>
                    </div>
                    <div className="heures">
                        <h3>heures d'ouvertures :</h3>
                        <p>Lundi au vendredi</p>
                        <p>7h30-17h00</p>
                        <p>Samedi et dimanche</p>
                        <p>9h00 à 17h00</p>
                    </div>
                </div>
                <div className="info info2">
                    <div className="adresse">
                        <h3>Téléphone :</h3>
                        <a href='tel:1-819-237-9813'>1-819-237-9813</a>
                    </div>
                    <div className="heures">
                        <h3>Email :</h3>
                        <a href='mailto:entretiensgrondin@hotmail.com'>entretiensgrondin@hotmail.com</a>
                    </div>
                    <div className='facebook'>
                        <h3>Suivez-Nous :</h3>
                        <a href='https://www.facebook.com/profile.php?id=100072122260397' aria-label="Voir la page facebook Entretiens Gouttières Rive-Sud"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div> 
                </div>
            </div>
        </footer>
    );
}
export default Footer;