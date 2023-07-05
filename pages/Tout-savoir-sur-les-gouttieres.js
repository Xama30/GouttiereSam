import imgProtegeGouttiere from '../public/img/protege-gouttiere-installe-par-gouttiere-rive-sud.png';
import imgGouttieresPleines from '../public/img/avant6.jpg';

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image'

const Header = dynamic(() => import('../component/Header'));
const Footer = dynamic(() => import('../component/Footer'));
const TopMainPage = dynamic(() => import('../component/TopMainPage'))
const BoxTxtTitleIn = dynamic(() => import('../component/BoxTxt_TitleIn'))
const CardInfo = dynamic(() => import('../component/Card_Info'))
const NumBar = dynamic(() => import('../component/NumBar'))
const BorderTitle = dynamic(() => import('../component/BorderTitle'));


function Informations(){
/*     useEffect(() => {
        document.title = "Tout savoir sur les gouttières : guide pratique - Gouttières Rive-Sud";
    }, []); */
    return(
        <div>

            <Head>
                <title>Tout savoir sur les gouttières : guide pratique - Gouttières Rive-Sud</title>
                <meta name="description" content="Découvrez tout ce que vous devez savoir sur les gouttières dans notre guide pratique. Apprenez comment les gouttières fonctionnent, comment les entretenir, les différents matériaux et styles disponibles sur le marché, et comment choisir les meilleures gouttières pour votre maison. - Gouttière Rive-Sud" />
                <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/Tout-savoir-sur-les-gouttieres" />
            </Head>
            <Header/>
            <TopMainPage
                title="Tout Savoir Sur Les Gouttières"
                text="Les gouttières sont un élément important de votre toiture et de votre maison, mais les connaissez-vous vraiment ? Savez-vous comment elles fonctionnent pour protéger votre maison contre les dégâts d'eau ? Les gouttières permettent de recueillir l'eau de pluie et de la diriger loin de votre maison, évitant ainsi les dégâts d'eau, les infiltrations et les moisissures. Elles sont souvent négligées dans l'entretien de la maison, mais nettoyer régulièrement vos gouttières est essentiel pour assurer leur bon fonctionnement."
            />
            <section id="section__BoxTxtTitleIn">
                <div className="section__BoxTxtTitleIn-content">
                <BoxTxtTitleIn
                    color="L"
                    title="Pourquoi les gouttières sont-elles importantes ?"
                    texts={["Les gouttières jouent un rôle crucial dans la protection de votre maison contre les dégâts d'eau. En évacuant l'eau de pluie, les gouttières empêchent l'eau de s'accumuler sur le toit et de pénétrer dans la maison. Cela peut prévenir les fuites, les infiltrations d'eau et les dégâts structurels qui peuvent être coûteux à réparer."]}
                    detail="T"
                    className="boxTxtIn_L"
                    route="/Pourquoi-entretenir-ses-gouttieres"/>
                <BoxTxtTitleIn
                    color="G"
                    title="Quand nettoyer ses gouttières ?"
                    texts={["Nettoyer régulièrement les gouttières est également crucial pour maintenir leur efficacité dans la protection de votre maison contre les dégâts d'eau. Les feuilles, les brindilles, les débris et les branches qui s'accumulent dans les gouttières peuvent obstruer le flux d'eau et provoquer des débordements et des fuites d'eau."]}
                    detail="T"
                    route="/Quand-nettoyer-ses-gouttieres"/>
                </div>
                <div className="img-container">
                    <Image 
                        src={imgGouttieresPleines} 
                        alt="Protège-gouttière en métal dans la région de la Rive-Sud qui retiennent les détritus tombés des arbres" />
                </div>
            </section>
            <section id="Info__TCarte">
                <CardInfo
                    title="Dangers de nettoyer ses gouttières soi-même"
                    text="Le nettoyage des gouttières peut être dangereux, en particulier si vous n'êtes pas équipé de l'équipement approprié ou si vous n'avez pas les compétences nécessaires. Il y a des risques de chutes, d'électrocution ou de blessures liées à l'utilisation d'échelles et d'autres équipements."
                    route="/Comment-nettoyer-ses-gouttieres"/>
                <CardInfo
                    title="Pourquoi faire appel à un expert?"
                    text="Engager un expert pour le nettoyage de vos gouttières garantit un nettoyage complet et en toute sécurité, ainsi qu'un entretien professionnel pour prolonger la durée de vie de votre système de drainage."
                    route="/Comment-nettoyer-ses-gouttieres"/>
                <CardInfo
                    title="Nettoyer ses gouttières soi-même"
                    text="Nettoyer soi-même ses gouttières peut être dangereux et causer des blessures ou des dégâts matériels, en plus de ne pas garantir un nettoyage complet et efficace."
                    route="/Comment-nettoyer-ses-gouttieres"/>
            </section>
            <NumBar/>
            <div className='title__IG'>
                <h2>Informations générales</h2>
            </div>
            <section id="Info__Gouttiere">
                <div className="InfoGouttiere">
                    <BorderTitle
                        title="Quels sont les différents types de gouttières? "
                        text=" Il existe différents types de gouttières, chacun ayant ses avantages et ses inconvénients en termes de durabilité, de coûts, d'esthétique et de facilité d'installation et d'entretien. Que vous cherchiez une gouttière en aluminium, en cuivre, en acier galvanisé ou en PVC, il est important de choisir le type de gouttière qui convient le mieux à votre maison et à votre budget."
                        detail="T"
                        link="/Les-differents-types-de-gouttieres"/>  
                </div>
                <BorderTitle
                    title="Quels sont les différents types de pare-feuilles? "
                    text="Les pare-feuilles de gouttière sont des accessoires utiles qui empêchent les feuilles, les débris et autres saletés de boucher vos gouttières. Ils peuvent également réduire le risque d'incendie en empêchant les feuilles sèches et autres matières combustibles de s'accumuler dans vos gouttières. Il existe différents types de pare-feuilles de gouttière, chacun avec ses propres avantages et inconvénients en termes de durabilité, de coûts et d'efficacité."
                    detail="T"
                    link="/Tout-savoir-sur-les-pare-feuilles"
                />
                <div className="img-container">
                    <Image 
                    src={imgProtegeGouttiere} 
                    alt="Protège-gouttière en métal dans la région de la Rive-Sud qui retiennent les détritus tombés des arbres" />
                </div>
            </section>
            <Footer/>
        </div>
    );
}
export default Informations;