import Header from './component/Header';
import Footer from './component/Footer';
import Card from './component/Card';
import Images from './img/Images';
import BoxTxt from './component/BoxTxt';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faLocationDot } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRightLong, faLocationDot);



function App(){
    return (
        <div>
            <Header/>
            <section id='section__accueil'>
                <div className='accueil__text-container'>
                    <h1>Goutière Rive-sud</h1>
                    <p>Ouvert du lundi au vendredi <br/> 8h à 17h</p>
                    <p>Soumission gratuite en ligne</p>
                    <p>Appelez-nous au : <br/> 1-888-851-6871</p>
                </div>
            </section>
            <section id='section__villes-desservies'>
                <h2>VILLES DÉSSERVIES</h2>
                <div className='villes__container'>
                        <ul>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />Brossard</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />Carignan</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />Saint-Jean-Sur-Richerlieu</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />Candiac</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />Marieville</li>
                        </ul>
                        <ul>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />longueuil</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />Chambly</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />La Prairie</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />St-Lambert</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-location-dot" />Beloeil</li>
                        </ul>
                </div>
            </section>
            <section id='section__services'>
                <div className="left">
                    <h2>Nettoyage de gouttières</h2>
                    <li>Gouttières résidentiels</li>
                    <li>Gouttières industrielles</li>
                    <li>Installation de pare-feuilles</li>
                    <li>Services de gouttières par abonnements</li>
                </div>
                <div className="right">
                    <a href="#">Voir en détails</a>
                </div>
            </section>
            <section id='section__BoxTxt'>
                <BoxTxt
                    color="G"
                    title="Pourquoi nettoyer vos gouttières?"
                    texts={["Les gouttières sont un élément crucial de votre maison, servant à diriger l'eau de pluie loin de la fondation et à éviter les dommages causés par l'eau. Cependant, les gouttières peuvent rapidement devenir obstruées par des feuilles, des branches, des débris et d'autres éléments extérieurs, entraînant des problèmes tels que des fuites d'eau, des dommages à la toiture et des problèmes d'infiltration d'eau dans votre maison.", "Le nettoyage régulier de vos gouttières est donc essentiel pour maintenir leur efficacité et prolonger leur durée de vie. Chez Les entretiens grondin, nous offrons des services de nettoyage de gouttières professionnels pour aider à protéger votre maison et votre famille des dommages causés par l'eau."]}
                />
                <BoxTxt
                    color="L"
                    title="Quand nettoyez ses gouttières"
                    texts={["Pour maintenir l'efficacité de vos gouttières, il est recommandé de les nettoyer au moins deux fois par an - une fois au printemps et une fois à l'automne. Cependant, si vous vivez dans une région où il y a beaucoup d'arbres, vous devrez peut-être nettoyer vos gouttières plus fréquemment pour éviter l'accumulation de feuilles et de débris."]}
                />
            </section>
            <section id='section__carte'>
                <Card 
                    title="Expériences et expertises"
                    text="Nous avons une équipe de professionnels expérimentés et bien formés, dotés des compétences et de l'expertise nécessaires pour nettoyer les gouttières de manière efficace et en toute sécurité. Notre entreprise utilise également des outils et des équipements de pointe pour garantir que les gouttières sont complètement débarrassées de toutes les saletés et débris, ce qui contribue à prolonger leur durée de vie et à maintenir l'intégrité de votre maison. "
                    image={Images.carte1}
                    side="left"/>
                <Card 
                    title="Service complet"
                    text="Nous offrons un service complet, y compris l'inspection des gouttières, le nettoyage et les réparations si nécessaire, afin de garantir que vos gouttières fonctionnent parfaitement."
                    image={Images.carte2}
                    side='right'/>
                <Card 
                    title="Satisfaction du client"
                    text="Notre entreprise s'engage à fournir un excellent service client, garantissant la satisfaction de nos clients à chaque étape du processus de nettoyage de gouttières. Nous offrons des garanties de satisfaction et des prix compétitifs."
                    image={Images.carte3}
                    side='left'/>
            </section>
            <Footer/>
        </div>
    );
}
export default App;