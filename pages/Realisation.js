import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {avant1, avant2, avant3, avant4, avant5, avant6, avant7, avant8, avant9, avant10, avant11, avant12, avant13, apres1, apres2, apres3, apres4, apres5, apres6, apres7, apres8, apres9, apres10, apres11, apres12, apres13} from '../public/img/Slider';

const Header = dynamic(() => import('../component/Header'));
const Footer = dynamic(() => import('../component/Footer'));
const BeforeAfterSlider = dynamic(() => import('../component/BeforeAfterSlider'));
const NumBar = dynamic(() => import('../component/NumBar'));

function Realisation(){
  return (
    <div>
        <Head>
            <title>Découvrez nos réalisations - Entretien Grondin Rive-Sud</title>
            <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/Realisation" />
            <meta name="description" content="Découvrez nos réalisations en matière de gouttières pour vous inspirer et vous aider à trouver des idées pour votre propre projet de gouttières. Nous sommes fiers de vous montrer nos projets réussis et notre expertise dans le domaine des gouttières pour vous offrir les meilleures solutions pour votre maison. - Gouttière Rive-Sud" />
        </Head>
        <Header />
        <section id="P2" className="Top__ContactUs">
            <h2>Réalisations</h2>
            <p>Nous sommes passionnés par notre métier et nous nous engageons à fournir des produits de qualité supérieure ainsi que des services d'installation professionnels à nos clients. Nous travaillons étroitement avec vous pour répondre à vos besoins spécifiques, car nous croyons que chaque projet est unique. N'hésitez pas à jeter un coup d'œil à nos réalisations et à nous contacter pour discuter de votre prochain projet de gouttières dans la région de la Rive-Sud de Montréal.</p>
        </section>
        <NumBar/>
        <section id="Realisation">

            <div className='works'>
                <BeforeAfterSlider beforeImage={apres1.src} afterImage={avant1.src}/>
                <BeforeAfterSlider beforeImage={apres2.src} afterImage={avant2.src}/>
                <BeforeAfterSlider beforeImage={apres3.src} afterImage={avant3.src}/>
                <BeforeAfterSlider beforeImage={apres4.src} afterImage={avant4.src}/>
                <BeforeAfterSlider beforeImage={apres5.src} afterImage={avant5.src}/>
                <BeforeAfterSlider beforeImage={apres6.src} afterImage={avant6.src}/>
                <BeforeAfterSlider beforeImage={apres7.src} afterImage={avant7.src}/>
                <BeforeAfterSlider beforeImage={apres8.src} afterImage={avant8.src}/>
                <BeforeAfterSlider beforeImage={apres9.src} afterImage={avant9.src}/>
                <BeforeAfterSlider beforeImage={apres10.src} afterImage={avant10.src}/>
                <BeforeAfterSlider beforeImage={apres11.src} afterImage={avant11.src}/>
                <BeforeAfterSlider beforeImage={apres12.src} afterImage={avant12.src}/>
                <BeforeAfterSlider beforeImage={apres13.src} afterImage={avant13.src}/>
            </div>
        </section>
        <Footer />
    </div>
  )
};

export default Realisation;