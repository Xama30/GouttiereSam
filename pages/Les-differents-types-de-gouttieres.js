import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Images from '../public/img/Images';

const Header = dynamic(() => import('../component/Header'));
const AccueilArticle = dynamic(() => import('../component/AccueilArticle'));
const BoxTxtTitleIn = dynamic(() => import('../component/BoxTxt_TitleIn'));
const CarteForm = dynamic(() => import('../component/Carte_Form'));
const NumBar = dynamic(() => import('../component/NumBar'));
const ListeArticleH2_H3_P = dynamic(() => import('../component/ListeArticleH2_H3_P'));
const Footer = dynamic(() => import('../component/Footer'));
const Soumission = dynamic(() => import('../component/Soumission'));

function TypesGouttieres(){

    const itemsList = [
        {titreh3:"Gouttières en PVC", texte:"Les gouttières en PVC sont un choix judicieux pour les propriétaires qui cherchent une solution légère, facile à installer et économique pour leur maison. En effet, leur résistance aux rayons UV et aux intempéries en font un choix idéal pour les climats chauds et humides. Cependant, il est important de noter que leur durabilité peut être un point de préoccupation, car elles ont tendance à se décolorer avec le temps et peuvent nécessiter des réparations ou un remplacement plus fréquent que d'autres types de gouttières. Malgré cela, les gouttières en PVC restent un choix populaire pour les propriétaires qui cherchent une option abordable et facile à entretenir."},
        {titreh3:"Gouttières en aluminium ", texte:"Les gouttières en aluminium sont durables et résistantes à la corrosion. Elles sont légères et disponibles dans une variété de couleurs, ce qui permet de les assortir facilement à la couleur de votre maison. Cependant, elles ont tendance à se plier facilement et peuvent fuir plus souvent que les autres types de gouttières. Néanmoins, avec une installation professionnelle et un entretien régulier, elles peuvent être une bonne option pour ceux qui recherchent une solution abordable et esthétique."},
        {titreh3:"Gouttières en cuivre ", texte:"Les gouttières en cuivre offrent une apparence élégante et sophistiquée à votre maison. Elles sont durables, résistantes à la corrosion et recyclables, ce qui les rend écologiques. Elles sont également plus durables que les autres types de gouttières, mais elles sont plus coûteuses et nécessitent un entretien régulier pour prévenir la formation de patine. Néanmoins, pour ceux qui sont prêts à investir dans une solution haut de gamme pour leur maison, les gouttières en cuivre sont un excellent choix."},
        {titreh3:"Gouttières en acier galvanisé ", texte:"Les gouttières en acier galvanisé sont robustes, durables et résistantes à la rouille. Elles sont disponibles dans une variété de couleurs et peuvent être peintes pour correspondre à la couleur de votre maison. Elles sont également économiques et conviennent à de nombreux budgets. Cependant, elles peuvent être plus lourdes que les autres types de gouttières et nécessitent une installation professionnelle pour garantir leur durabilité. Néanmoins, si vous cherchez une solution économique et solide pour votre maison, les gouttières en acier galvanisé peuvent être une option intéressante."},
    ]

    return(
        <div>
            <Head>
                <title>Les différents types de gouttières - Gouttière Rive-Sud</title>
                <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/Les-differents-types-de-gouttieres" />
                <meta name="description" content="Découvrez notre guide d'achat complet sur les différents types de gouttières disponibles sur le marché. Apprenez-en plus sur les avantages et les inconvénients des différents matériaux de gouttières, les styles et les formes disponibles, ainsi que les facteurs à considérer pour choisir les meilleures gouttières pour votre maison. - Gouttière Rive-Sud" />
            </Head>
            <Header/>
            <AccueilArticle
                titre="Les différents types de gouttières"
                soustitre="Lorsque vous choisissez des gouttières pour votre maison, vous disposez de plusieurs options, chacune ayant ses avantages et ses inconvénients. Dans cet article, nous allons explorer les différents types de gouttières et vous aider à choisir la meilleure option pour votre maison."
                imgsrc={Images.carte2}
                alt="Gouttière qui déborde dans la région de la Rive Sud"/>
            <Soumission/>
            <ListeArticleH2_H3_P
                titreh2="Sélection de gouttières"
                itemLists={itemsList}/>
            <NumBar/>
            <BoxTxtTitleIn
                color="L"
                title="En conclusion"
                texts={["Le choix de la gouttière idéale pour votre maison dépendra de vos préférences personnelles, de votre budget et de l'emplacement de votre maison. Cependant, en prenant en compte les avantages et les inconvénients de chaque type de gouttière, vous pouvez faire un choix éclairé pour protéger votre maison des intempéries et des dommages causés par l'eau."]}
                detail="F"/>
            <CarteForm/>
            <Footer/>        
        </div>
    )
};

export default TypesGouttieres;