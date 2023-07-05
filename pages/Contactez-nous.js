import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faClock, faPhone, faMailReply} from '@fortawesome/free-solid-svg-icons';

const Header = dynamic(() => import('../component/Header'));
const Icon_H3_P = dynamic(() => import('../component/Icon_H3_P'));
const BorderTitle = dynamic(() => import('../component/BorderTitle'));
const Footer = dynamic(() => import('../component/Footer'));
const Form = dynamic(() => import('../component/Form'));

library.add(faClock, faPhone, faMailReply);

function ContactUs(){
    return(
        <div>
            <Head>
                <title>Contactez-nous pour vos besoins en gouttières - Gouttières Rive-Sud</title>
                <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/Contactez-nous" />  
                <meta name="description" content="Besoin d'aide pour nettoyer ou installer des gouttières? Contactez notre équipe d'experts pour des conseils et une assistance professionnelle. Nous sommes là pour répondre à toutes vos questions et vous offrir des services de qualité pour vos besoins en gouttières. - Gouttière Rive-Sud" />
            </Head>
            <Header />
            <section id="#Contactez-nous" className="Top__ContactUs">
                <h2>Contactez-Nous</h2>
            </section>
            <section id="Icon_ContactUs">
                <Icon_H3_P
                    icon={faClock}
                    title="Heures d'ouvertures"
                    text="Lundi au vendredi de 7h30 à 17h00"
                    text2="Samedi et dimanche de 9h00 à 17h00"/>
                <Icon_H3_P
                    icon={faPhone}
                    title="Téléphone"
                    tel="1-819-237-9813"/>
                <Icon_H3_P
                    icon={faMailReply}
                    title="Courriel"
                    email="entretiensgrondin@hotmail.com"/>
            </section>
            <section id="form">
                <h2>Faire une soumission en ligne</h2>
                <h3>Réponse dans un délai de 24h</h3>
                <Form/>
            </section>
            <section>
                <div className='title-bar'>Pourquoi faire affaire avec un expert ?</div>
                <p className="p-CU">Lorsqu'il s'agit d'entretenir votre maison, les gouttières jouent un rôle essentiel dans la protection contre les dommages causés par l'eau. Cependant, leur entretien peut être fastidieux et dangereux si vous décidez de le faire vous-même. C'est là qu'un expert en nettoyage de gouttières entre en jeu. Faire appel à un professionnel présente de nombreux avantages.</p>
                <BorderTitle
                title="Économie de temps et d'énergie"
                text="Faire appel à un professionnel vous permet d'économiser du temps et de l'énergie précieux. Le nettoyage des gouttières peut être une tâche longue et fastidieuse, en particulier si vous n'avez pas l'équipement adéquat. Les professionnels disposent des outils appropriés pour effectuer le travail de manière rapide et efficace, vous libérant ainsi de cette corvée."
                className="CU-BT"
                detail='F'/>
                <BorderTitle
                title="Prévention des problèmes potentiels"
                text="Engager un expert en nettoyage de gouttières contribue à prévenir les problèmes potentiels liés à des gouttières obstruées. Des gouttières obstruées peuvent causer des dégâts d'eau, des infiltrations dans les murs, des problèmes de fondation et même des infestations de parasites. En confiant cette tâche à un professionnel, vous réduisez les risques de tels problèmes et vous protégez votre maison des dommages coûteux."
                className="CU-BT"
                detail="F"/>
                <BorderTitle
                title="Assurance et garantie de satisfaction"
                text="Les experts en nettoyage de gouttières sont souvent assurés et offrent une garantie de satisfaction. Cela vous donne une tranquillité d'esprit supplémentaire, sachant que le travail sera effectué correctement et que vous serez couvert en cas de problème."
                className="CU-BT"
                detail="F"/>
                <p className="p-CU p-CU2">En conclusion, si vous souhaitez bénéficier des avantages d'un nettoyage professionnel de gouttières, nous sommes là pour vous aider. En tant qu'experts en nettoyage de gouttières de confiance, nous opérons dans la Rive-Sud de Montréal. Notre expertise, notre savoir-faire et notre engagement envers la satisfaction client font de nous le choix idéal pour assurer la protection de votre maison contre les dommages causés par l'eau. N'attendez plus, contactez Les Entretiens Grondin dès aujourd'hui pour des services de nettoyage de gouttières de qualité supérieure.</p>
            </section>
            <Footer/>
        </div>
    );
};
export default ContactUs;