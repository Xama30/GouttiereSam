import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import TopMainPage from '../component/TopMainPage';
import BoxTxt from '../component/BoxTxt';
import BorderBox from '../component/BoxTxt_BB';
import BorderTitle from '../component/BorderTitle';
import NumBar from '../component/NumBar';
import '../CSS/Services.css';


function Services(){
    return(
        <div>
            <Header/>
            <TopMainPage
                title="Nos Services"
                text="Le nettoyage de gouttières est une tâche souvent négligée, mais c'est une partie importante de l'entretien de la maison. Les gouttières obstruées peuvent causer de graves dommages à la maison, comme des fuites d'eau dans la toiture ou des infiltrations d'eau dans les murs."/>
            <BoxTxt
                color="L"
                title="Offres de services"
                texts={["Notre entreprise est fière d'offrir des services de nettoyage de gouttières de qualité supérieure à nos clients. Nous sommes entièrement agréés et assurés pour votre tranquillité d'esprit. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services de nettoyage de gouttières et pour obtenir une estimation gratuite. Nous sommes impatients de vous aider à protéger votre maison contre les dommages causés par les gouttières obstruées."]}/>
            <section id="service__EntretienG">
                <h2>Entretien de gouttière</h2>
                <div className="service__ImgC">
                    <BorderBox
                        title="Gouttières résidentiels"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor mi eget magna lobortis tristique. Sed eget velit vel libero scelerisque tempor. Pellentesque semper tincidunt diam, eget convallis tortor vulputate id. Nunc euismod, ipsum eu convallis maximus, justo neque lacinia ante, sit amet commodo magna nibh ac mauris. Nam venenatis blandit quam, in finibus dolor placerat ac."/>
                    <BorderBox
                        title="Gouttières industrielles"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor mi eget magna lobortis tristique. Sed eget velit vel libero scelerisque tempor. Pellentesque semper tincidunt diam, eget convallis tortor vulputate id. Nunc euismod, ipsum eu convallis maximus, justo neque lacinia ante, sit amet commodo magna nibh ac mauris. Nam venenatis blandit quam, in finibus dolor placerat ac."/>
                </div>
            </section>
            <section className='margin'>
                <BorderTitle
                    title="Installations de parefeuilles"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor mi eget magna lobortis tristique. Sed eget velit vel libero scelerisque tempor. Pellentesque semper tincidunt diam, eget convallis tortor vulputate id. Nunc euismod, ipsum eu convallis maximus, justo neque lacinia ante, sit amet commodo magna nibh ac mauris. Nam venenatis blandit quam, in finibus dolor placerat ac."/>
            </section>
            <NumBar/>
            <section className='margin'>
                <BorderTitle
                    title="Nettoyage par abonnement"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor mi eget magna lobortis tristique. Sed eget velit vel libero scelerisque tempor. Pellentesque semper tincidunt diam, eget convallis tortor vulputate id. Nunc euismod, ipsum eu convallis maximus, justo neque lacinia ante, sit amet commodo magna nibh ac mauris. Nam venenatis blandit quam, in finibus dolor placerat ac."/>
                </section>
            <Footer/>    
        </div>

    );
}

export default Services;