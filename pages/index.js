import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Images from '../public/img/Images';

const Animation = dynamic(() => import('../component/Animation'));
const Header = dynamic(() => import('../component/Header'));
const Footer = dynamic(() => import('../component/Footer'));
const Soumission = dynamic(() => import('../component/Soumission'));
const VoirEnDt = dynamic(() => import('../component/VoirEnDt'));
const BoxTxt = dynamic(() => import('../component/BoxTxt'));
const Card = dynamic(() => import('../component/Card'));
const CarteForm = dynamic(() => import('../component/Carte_Form'));

const Index = () => {
  return (
      <div>
      <Head>
        <title>Entretien de gouttières Grondin - Rive-Sud</title>
        <link rel="canonical" href="https://entretiensgouttieresrivesud.ca" />
        <meta name="description" content="Nettoyage de gouttière. Installations de protège-gouttière. Profitez d'un service d'entretien de gouttière de qualité supérieure sur la Rive-Sud. Garder vos gouttières bien entretenu et apprenez en plus sur l'entretien de gouttière. Entretien Grondin - Téléphone : 1-888-851-6871" />
      </Head>
      <Animation />
      <Header/>
      <main>
        <section id='Accueil'>
            <div className='accueil__text-container'>
            <h1 className='hidden_fade-bottom'>Gouttière Rive-sud</h1>
            <h2 className='hidden_fade-bottom'>Les Entretiens Grondin</h2>
            <p className='hidden_fade-bottom'>Ouvert du lundi au vendredi <br/> 7h30 à 17h00</p>
            <p className='hidden_fade-bottom'>Ouvert samedi et dimance <br/> 9h00 à 17h00</p>
            <p className='hidden_fade-bottom'>Soumission gratuite en ligne</p>
            <p className='hidden_fade-bottom'>Appelez-nous au :</p>
            <p className='hidden_fade-bottom'><a href='tel:1-819-237-9813'>1-819-237-9813</a></p>
            </div>
        </section>
        <Soumission/>
        <section id='section__villes-desservies'>
            <h2>VILLES DÉSSERVIES</h2>
            <div className='villes__container'>
                <ul className='hidden_fade-bottom'>
                    <li><FontAwesomeIcon icon={faLocationDot} />Brossard</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />Carignan</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />Saint-Jean-sur-Richelieu</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />Candiac</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />Marieville</li>
                </ul>
                <ul className='hidden_fade-bottom'>
                    <li><FontAwesomeIcon icon={faLocationDot} />Longueuil</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />Chambly</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />La Prairie</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />St-Lambert</li>
                    <li><FontAwesomeIcon icon={faLocationDot} />Beloeil</li>
                </ul>
            </div>
        </section>
        <section id='section__services'>
            <div className="left">
                <h2 className='hidden_fade-bottom'>Nettoyage de gouttières Rive-Sud de Montréal</h2>
                <ul>
                    <li className='hidden_fade-right'>Gouttières résidentiels</li>
                    <li className='hidden_fade-right'>Gouttières industrielles</li>
                    <li className='hidden_fade-right'>Installation de pare-feuilles</li>
                    <li className='hidden_fade-right'>Services de gouttières par abonnements</li>
                </ul>
            </div>
            <div className="right">
                <VoirEnDt
                link ="/Nos-Services"/>
            </div>
        </section>

        <section id='section__BoxTxt'>
            <BoxTxt
                color="G"
                title="Pourquoi nettoyer vos gouttières?"
                texts={["Les gouttières sont un élément crucial de votre maison, servant à diriger l'eau de pluie loin de la fondation et à éviter les dommages causés par l'eau. Cependant, les gouttières peuvent rapidement devenir obstruées par des feuilles, des branches, des débris et d'autres éléments extérieurs, entraînant des problèmes tels que des fuites d'eau, des dommages à la toiture et des problèmes d'infiltration d'eau dans votre maison.", "Le nettoyage régulier de vos gouttières est donc essentiel pour maintenir leur efficacité et prolonger leur durée de vie. Chez Les entretiens grondin, nous offrons des services professionnels de nettoyage de gouttières dans la Rive-Sud de Montréal afin de protéger votre maison et votre famille des dommages causés par l'eau."]}
                detail="T"
                classNameBoxTxt="BoxTxt__Accueil"
                route="/Pourquoi-entretenir-ses-gouttieres"
            />
            <BoxTxt
                color="L"
                title="Quand nettoyez ses gouttières"
                texts={["Pour maintenir l'efficacité de vos gouttières, il est recommandé de les nettoyer au moins deux fois par an - une fois au printemps et une fois à l'automne. Cependant, si vous vivez dans une région où il y a beaucoup d'arbres, vous devrez peut-être nettoyer vos gouttières plus fréquemment pour éviter l'accumulation de feuilles et de débris."]}
                className="boxTxt_L"
                detail="T"
                classNameBoxTxt="BoxTxt__Accueil"
                route="/Quand-nettoyer-ses-gouttieres"
            />
        </section>
        <section id='section__carte'>
            <Card 
                title="Expériences et expertises"
                text="Nous avons une équipe de professionnels expérimentés et bien formés, dotés des compétences et de l'expertise nécessaires pour nettoyer les gouttières de manière efficace et en toute sécurité. Notre entreprise utilise également des outils et des équipements de pointe pour garantir que les gouttières sont complètement débarrassées de toutes les saletés et débris, ce qui contribue à prolonger leur durée de vie et à maintenir l'intégrité de votre maison. "
                image={Images.carte1}
                alt="Eau qui tombe d'une gouttière pas entretenue."
                side="left"/>
            <Card 
                title="Service complet"
                text="Nous offrons un service complet dans toute la Rive-Sud de Montréal, y compris l'inspection des gouttières, le nettoyage et les réparations si nécessaire, afin de garantir que vos gouttières fonctionnent parfaitement. Avec notre service complet de gouttières, vous pouvez être assuré que votre maison sera protégée contre les dommages causés par l'eau et que vos gouttières dureront longtemps."
                image={Images.carte2}
                alt="Pluie qui tombe sur une maison avec ses gouttières entretenu par les entretiens Grondins"
                side='right'/>
            <Card 
                title="Satisfaction du client"
                text="Notre entreprise s'engage à fournir un excellent service client, garantissant la satisfaction de nos clients à chaque étape du processus de nettoyage de gouttières. Nous offrons des garanties de satisfaction et des prix compétitifs.  Notre équipe de professionnels expérimentés travaille efficacement et en toute sécurité, en utilisant des équipements de pointe pour garantir un travail de qualité rapide et précis."
                image={Images.carte3}
                alt="Feuille d'arbre qui peut s'accumuler dans les gouttières si elle n'est pas entretenue"
                side='left'
            />
        </section>
        <CarteForm/>
      </main>
      <Footer/>
    </div>
  );
};

export default Index;
