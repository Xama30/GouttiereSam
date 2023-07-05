import { useState } from 'react'
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../component/Header'));
const TopMainPage = dynamic(() => import('../component/TopMainPage'));
const NumBar = dynamic(() => import('../component/NumBar'));
const CarteForm = dynamic(() => import('../component/Carte_Form'));
const Footer = dynamic(() => import('../component/Footer'));

function FAQ(){

    const data = [
        {
            Question: 'Pourquoi est-il important de nettoyer régulièrement mes gouttières ?',
            Reponse: "Il est important de nettoyer régulièrement vos gouttières pour éviter les obstructions et les dommages causés par l'accumulation de débris."
        },
        {
            Question: 'À quelle fréquence dois-je faire nettoyer mes gouttières ?',
            Reponse: "Il est recommandé de faire nettoyer vos gouttières au moins deux fois par an, de préférence au printemps et à l'automne."
        },
        {
            Question: "Quels sont les signes indiquant que mes gouttières ont besoin d'un nettoyage ?",
            Reponse: "Les signes indiquant que vos gouttières ont besoin d'un nettoyage comprennent le débordement d'eau, les plantes qui poussent dans les gouttières et les fissures visibles."
        },
        {
            Question: "Comment puis-je nettoyer mes gouttières moi-même ?",
            Reponse: "Vous pouvez nettoyer vos gouttières vous-même en utilisant une échelle, des gants de protection et une pelle pour enlever les débris. Assurez-vous de prendre les mesures de sécurité nécessaires."
        },
        {
            Question: "Pourquoi devrais-je faire appel à un professionnel pour le nettoyage de mes gouttières ?",
            Reponse: "Faire appel à un professionnel pour le nettoyage de vos gouttières garantit un travail de qualité, une sécurité accrue et l'utilisation d'outils spécialisés."
        },
        {
            Question: "Comment choisir une entreprise de nettoyage de gouttières fiable ?",
            Reponse: "Pour choisir une entreprise fiable de nettoyage de gouttières, vérifiez les avis clients, demandez des recommandations, et assurez-vous qu'ils sont licenciés et assurés."
        },
        {
            Question: "Quels outils sont utilisés pour nettoyer les gouttières ?",
            Reponse: "Les outils couramment utilisés pour nettoyer les gouttières sont une pelle à gouttière, une brosse, un tuyau d'arrosage à haute pression et éventuellement un aspirateur à feuilles."
        },
        {
            Question: "Le nettoyage de gouttières inclut-il le débouchage des descentes pluviales ?",
            Reponse: "Oui, le nettoyage des gouttières comprend généralement le débouchage des descentes pluviales pour assurer un bon écoulement de l'eau."
        },
        {
            Question: "Que se passe-t-il si je ne nettoie pas mes gouttières régulièrement ?",
            Reponse: "Si vous ne nettoyez pas régulièrement vos gouttières, cela peut entraîner des débordements d'eau, des infiltrations, des dommages aux fondations et une détérioration prématurée des gouttières."
        },
        {
            Question: "Quels problèmes peuvent survenir si mes gouttières sont obstruées ?",
            Reponse: "Les problèmes courants causés par des gouttières obstruées sont les débordements d'eau, les fuites, les dommages aux façades, les problèmes d'humidité et la formation de moisissures."
        },
        {
            Question: "Combien de temps faut-il pour nettoyer mes gouttières ?",
            Reponse: "Le temps nécessaire pour nettoyer vos gouttières dépend de leur longueur, de leur état et du niveau d'obstruction. Cela peut prendre de quelques heures à une journée complète."
        },
        {
            Question: "Les gouttières doivent-elles être nettoyées avant ou après la saison des pluies ?",
            Reponse: "Il est préférable de nettoyer vos gouttières avant la saison des pluies pour vous assurer qu'elles sont en bon état de fonctionnement."
        },
        {
            Question: "Puis-je installer des protège-gouttières pour éviter le nettoyage fréquent ?",
            Reponse: "Oui, l'installation de protège-gouttières peut réduire la fréquence de nettoyage en empêchant les débris de s'accumuler, mais un entretien périodique reste nécessaire."
        },
        {
            Question: "Quelles sont les conséquences de l'accumulation de débris dans mes gouttières ?",
            Reponse: "L'accumulation de débris dans vos gouttières peut entraîner des obstructions, des fuites, des dommages aux fondations, des problèmes d'infiltration d'eau et l'attraction d'insectes et de rongeurs."
        },
        {
            Question: "Comment puis-je savoir si mes gouttières sont endommagées et doivent être réparées ?",
            Reponse: "Vous pouvez détecter les dommages aux gouttières en recherchant des fissures, des trous, des joints défectueux et des pièces détachées. Une inspection professionnelle peut également être utile."
        },
        {
            Question: "Faut-il nettoyer les gouttières en aluminium différemment des gouttières en PVC ?",
            Reponse: "Les gouttières en aluminium et en PVC peuvent être nettoyées de la même manière, en utilisant des outils appropriés et des techniques douces pour éviter les dommages."
        },
        {
            Question: "Quelles mesures préventives puis-je prendre pour éviter l'accumulation de débris dans mes gouttières ?",
            Reponse: "Pour prévenir l'accumulation de débris dans vos gouttières, vous pouvez installer des protège-gouttières, tailler les arbres surplombant et effectuer un nettoyage périodique."
        },
        {
            Question: "Mon assurance couvre-t-elle les dommages causés par des gouttières obstruées ?",
            Reponse: "Vérifiez les termes de votre police d'assurance, car certaines compagnies peuvent couvrir les dommages causés par des gouttières obstruées, mais cela peut varier."
        },
        {
            Question: "Combien coûte généralement le nettoyage des gouttières ?",
            Reponse: "Le coût du nettoyage des gouttières dépend de plusieurs facteurs tels que la taille de la maison, la longueur des gouttières et le niveau d'obstruction. Contactez-nous pour obtenir un devis gratuitement."
        },
        {
            Question: "Quelles autres services proposez-vous en plus du nettoyage de gouttières ?",
            Reponse: "En plus du nettoyage de gouttières, nous proposons des services tels que la réparation de gouttières et l'installation de pare-feuilles."
        },
        {
            Question: "Les pare-feuilles fonctionnent-ils pour les aiguilles de conifères ?",
            Reponse: "Les pare-feuilles ne sont généralement pas adaptés pour protéger contre les aiguilles de conifères. Les aiguilles de conifères, en raison de leur forme et de leur taille, peuvent facilement s'accrocher et obstruer les pare-feuilles traditionnels. "
        },
    ]

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <div>
            <Head>
                <title>FAQ - Réponses à toutes vos questions sur l'entretien de votre toit</title>
                <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/FAQ" />
                <meta name="description" content="Consultez notre FAQ pour obtenir des réponses aux questions courantes sur le nettoyage de gouttières dans la Rive-Sud de Montréal. Nous fournissons des services professionnels de nettoyage de gouttières pour maintenir votre maison en bon état. Entretien de gouttière Grondin Rive-Sud." />
            </Head>
            <Header/>
            <TopMainPage
            title="FAQ"
            text="Bienvenue dans notre FAQ sur l'entretien des gouttières ! Chez notre compagnie de nettoyage de gouttières située dans la Rive-Sud de Montréal, nous comprenons l'importance de maintenir vos gouttières propres et en bon état. Dans cette section, nous répondrons aux questions les plus fréquemment posées concernant l'entretien des gouttières, afin de vous aider à prendre soin de votre système de drainage de manière efficace et durable."/>
            <div className="faq-wrapper">
                <div className="accordion">
                    {data.map((items, i) => (
                        <div className="faq-items" key={i}>
                            <div className="faq-title" onClick={() => toggle(i)}>
                                <h2>{items.Question}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content-faq show' : 'content-faq'}>
                                <p>{items.Reponse}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='faq-numbar'>
               <NumBar/>
            </div>
            <div className='faq-conclusion'>
                <p>Chez les Entretiens Grondin, nous nous engageons à fournir des informations précises et pertinentes pour vous aider à prendre soin de vos gouttières et à maintenir l'intégrité de votre maison. Votre intérêt pour notre FAQ témoigne de votre souci de préserver la durabilité de vos gouttières et de prévenir tout dommage potentiel.</p>
                <p>Si vous avez d'autres questions spécifiques, ou si vous souhaitez obtenir des informations supplémentaires sur nos services de nettoyage de gouttières, nous vous encourageons vivement à nous contacter. Notre équipe d'experts se fera un plaisir de répondre à vos préoccupations et de vous fournir les conseils adaptés à vos besoins.</p>
                <p>Votre satisfaction est notre priorité absolue, et nous sommes là pour vous accompagner tout au long du processus. Nous vous remercions encore une fois de votre intérêt pour les Entretiens Grondins et espérons avoir l'opportunité de vous aider à maintenir vos gouttières en parfait état de fonctionnement.</p>       
            </div>
            <CarteForm/>
            <Footer/>
        </div>
    )
}
export default FAQ;