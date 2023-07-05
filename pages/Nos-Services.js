import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import MaisonGouttiere4 from '../public/img/maison-dans-la-foret-de-la-region-de-la-rive-sud-avec-des-feuilles-qui-tombent-dans-les-gouttieres.jpg';
import Image from 'next/image'

const Header = dynamic(() => import('../component/Header'));
const TopMainPage = dynamic(() => import('../component/TopMainPage'));
const BoxTxt = dynamic(() => import('../component/BoxTxt'));
const BorderTitle = dynamic(() => import('../component/BorderTitle'));
const NumBar = dynamic(() => import('../component/NumBar'));
const H2PImgF = dynamic(() => import('../component/H2-P-ImgF'));
const CarteForm = dynamic(() => import('../component/Carte_Form'));
const Footer = dynamic(() => import('../component/Footer'));

const Index = () => {
  return (
      <div id="P1">
        <Head>
          <title>Nos services d'entretien de gouttière - Rive-Sud</title>
          <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/Services" />
          <meta name="description" content="Découvrez nos services de gouttières pour votre maison, y compris l'installation de protège gouttière, le nettoyage et la réparation. Notre équipe d'experts est là pour vous aider à maintenir vos gouttières en bon état et à prévenir les dommages potentiels à votre toit et votre maison. Contactez-nous pour en savoir plus sur nos services de gouttières professionnels. - Gouttière Rive-Sud" />
        </Head>
            <Header/>
            <main>
            <TopMainPage
                title="Nos Services"
                text="Le nettoyage de gouttières est une tâche souvent négligée, mais c'est une partie importante de l'entretien de la maison. Les gouttières obstruées peuvent causer de graves dommages à la maison, comme des fuites d'eau dans la toiture ou des infiltrations d'eau dans les murs. En plus de prévenir les dommages à la maison, le nettoyage régulier des gouttières peut également prolonger la durée de vie des gouttières et aider à maintenir l'aspect esthétique de la maison en empêchant la formation de taches et de moisissures."/>
            <BoxTxt
                color="L"
                title="Offres de services"
                texts={["Bienvenue chez Les Entretiens Grondin, votre entreprise de nettoyage de gouttières de confiance sur la Rive-Sud de Montréal ! Nous sommes fiers de proposer des services de nettoyage de gouttières de qualité supérieure à nos clients. Notre entreprise est entièrement agréée et assurée pour garantir votre tranquillité d'esprit. Découvrez nos services de nettoyage de gouttières et d'installation de pare-feuilles ci-dessous pour en savoir plus sur la façon dont nous pouvons vous aider à protéger votre maison contre les dommages causés par les gouttières obstruées.", "En plus de notre zone de service de nettoyage de gouttières couvrant les grandes villes de la Rive-Sud de Montréal comme Brossard, Carignan, Saint-Jean-sur-Richelieu, Candiac, Marieville, Longueuil, Chambly, La Prairie, St-Lambert, Beloeil et plusieurs autres, nous sommes également en mesure d'offrir des services dans les zones avoisinantes en fonction des besoins de nos clients.", "Nous sommes fiers de mettre en avant nos réalisations passées dans la section dédiée sur notre site web. Ces exemples concrets illustrent notre expertise et notre capacité à fournir des résultats exceptionnels à nos clients. Nous vous invitons à y jeter un coup d'œil pour en apprendre davantage sur notre savoir-faire. Nous avons travaillé avec diverses entreprises et organisations dans différents secteurs, ce qui témoigne de notre flexibilité et de notre adaptabilité. Nous espérons que ces réalisations vous donneront confiance dans notre capacité à répondre à vos besoins"]}
                className="boxTxt_L"
                detail="F"
            />
            <section id="service__EntretienG">
                <H2PImgF
                title="Entretien de gouttière Rive-Sud"
                texts={["Nos professionnels expérimentés utilisent des équipements de pointe pour garantir que vos gouttières restent propres et libres d'obstructions, évitant ainsi les problèmes de débordement d'eau et de dommages potentiels à votre propriété. Nous sommes conscients que les gouttières obstruées peuvent causer des dommages importants à votre maison, y compris des infiltrations d'eau, de l'humidité et des moisissures. C'est pourquoi nous prenons chaque nettoyage de gouttières très au sérieux et nous assurons que chaque partie de votre système de gouttières est inspectée et nettoyée de manière approfondie.", "Notre service de nettoyage de gouttières est disponible pour les propriétaires résidentiels et commerciaux. Nous sommes fiers de fournir un service professionnel, rapide et efficace à des prix compétitifs. Nous sommes également à votre disposition pour des services de réparation de gouttières pour garantir que votre système de gouttières reste en bon état de fonctionnement.", "En choisissant Les Entretiens Grondin, vous choisissez une entreprise qui met l'accent sur la qualité, l'authenticité et la satisfaction du client. Nous sommes disponibles pour répondre à toutes vos questions et pour vous aider à protéger votre maison contre les dommages causés par des gouttières obstruées."]}/>
            </section>
            <section className='margin'>
                <BorderTitle
                    title="Installations de pare-feuilles"
                    text="L'installation de pare-feuilles sur vos gouttières est un moyen efficace de protéger votre maison contre les dommages causés par l'accumulation de débris et de feuilles. Les pare-feuilles empêchent les débris de pénétrer dans vos gouttières, ce qui permet à l'eau de s'écouler librement et d'éviter ainsi les problèmes de débordement d'eau. Les pare-feuilles réduisent également la nécessité de nettoyer régulièrement vos gouttières, ce qui peut vous faire économiser du temps et de l'argent à long terme. Chez Les Entretiens Grondin, nous proposons des services professionnels d'installation de pare-feuilles dans la Rive-Sud de Montréal pour vous aider à protéger votre maison contre les dommages causés par les gouttières obstruées. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services et pour obtenir une estimation gratuite."
                    detail="T"
                    link="/Tout-savoir-sur-les-pare-feuilles"/>
            </section>
            <NumBar/>
            <section className='margin'>
                <BorderTitle
                    title="Nettoyage par abonnement"
                    text="Le nettoyage de gouttières par abonnement est un service que nous proposons à nos clients pour leur faciliter la vie. Ce service régulier consiste à planifier des nettoyages de gouttières à intervalles réguliers afin de garantir leur bon fonctionnement tout au long de l'année. En souscrivant à notre service de nettoyage de gouttières par abonnement, vous n'aurez plus à vous soucier de la propreté de vos gouttières. Nous nous occuperons de planifier les nettoyages à des moments pratiques pour vous, en fonction de vos besoins et de votre emploi du temps. Les avantages d'un abonnement de nettoyage de gouttières comprennent une meilleure protection de votre maison contre les dommages causés par des gouttières obstruées, une réduction des coûts de réparation et d'entretien à long terme, ainsi qu'une tranquillité d'esprit accrue. Contactez-nous dès maintenant pour en savoir plus sur nos services de nettoyage de gouttières par abonnement dans la Rive-Sud de Montréal."
                    detail="F"
                />   
            </section>
                <div className='img-container-parefeuille'>
                    <Image
                      src={MaisonGouttiere4}
                      alt="Maison dans la forêt de la région de la Rive-Sud avec des feuilles qui tombent dans les gouttières"
                    />
                </div>
            <CarteForm/>
            </main>
            <Footer/>    
        </div>
  );
};

export default Index;