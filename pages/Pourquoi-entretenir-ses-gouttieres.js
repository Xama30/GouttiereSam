import Images from '../public/img/Images';
import imgToiture from '../public/img/toiture-abime-et-la-gouttiere-pleines-de-debris.jpg';
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Header = dynamic(() => import('../component/Header'));
const AccueilArticle = dynamic(() => import('../component/AccueilArticle'));
const TexteArticleH2 = dynamic(() => import('../component/TexteArticleH2_P'));
const ParagrapheArticle = dynamic(() => import('../component/ParagrapheArticle'));
const NumBar = dynamic(() => import('../component/NumBar'));
const CarteForm = dynamic(() => import('../component/Carte_Form'));
const Footer = dynamic(() => import('../component/Footer'));


function Pourquoi() {

    const texte = [{
        titre: "Fissures et déformations",
        text: "La glace peut se former à l'intérieur des segments verticaux et horizontaux des gouttières. Les changements de température peuvent faire gonfler ou éclater la glace, entraînant des fissures et des déformations des gouttières. Cela peut causer des fuites d'eau futures, il est donc important de réparer les fissures dès que possible. Si les fissures sont importantes, il est recommandé de faire appel à un professionnel pour une réparation durable."
    },
    {
        titre: "Changement de pente",
        text: "L'angle des gouttières est conçu pour diriger l'eau vers les descentes pluviales. Cependant, le poids des débris végétaux, de l'eau ou de la glace accumulés peut inverser cette pente, entraînant une stagnation de l'eau. Si vous remarquez cela après une forte pluie, il est probable que la pente n'est pas suffisamment prononcée. Dans ce cas, une nouvelle installation est recommandée plutôt qu'une simple réparation. Cependant, cela doit être effectué par un professionnel car ce type de détérioration est difficile à corriger soi-même."
    },
    {
        titre: "Affaissement",
        text: "L'accumulation de neige, la formation de glace en bordure du toit et la dégradation des supports des gouttières peuvent entraîner leur affaissement et leur perte d'efficacité. Pour résoudre ce problème, il est souvent nécessaire d'ajouter des clous ou des crochets aux bons endroits pour renforcer le système de gouttières. Cela peut être effectué par soi-même avec le matériel approprié, mais il est préférable de faire appel à un professionnel pour s'assurer que les fixations sont placées aux bons endroits et qu'il y en a suffisamment. Une inspection régulière permet de détecter les dommages et de planifier leur réparation avant qu'ils ne deviennent plus importants."
    }
    ]; 
    const texte1 = [{
        titre: "Dommages causés à la toiture",
        text: "Un mauvais entretien des gouttières peut causer des infiltrations d'eau dans le toit et dans la planche de rive, entraînant des dommages structurels et la pourriture de ces éléments. De plus, une gouttière d'un toit se déversant directement sur un autre toit plus bas peut entraîner une usure prématurée des bardeaux d'asphalte. Il est donc important de s'assurer que les gouttières dirigent l'eau vers le sol et non vers la toiture. L'entretien des gouttières coûte beaucoup moins cher que la réparation de la toiture. Il est donc recommandé de faire des inspections régulières pour éviter des coûts élevés."
    },
    {
        titre: "Dommages causés aux fondations",
        text: "Les descentes d'eau pluviale sont conçues pour diriger l'eau à au moins 1,5 mètre de la maison, voire plus si la pente du terrain ramène l'eau vers la maison. Cependant, si les gouttières ne font pas leur travail adéquatement en raison d'une mauvaise installation ou d'une détérioration, l'eau qui déborde et tombe toujours aux mêmes endroits trop près des fondations peut éroder ou compacter le sol au fil du temps. Les dépressions ainsi créées permettront à l'eau de s'y accumuler."
    }
    ];
    const texte2 = [{
        titre: "Prolifération d'insectes",
        text: "Lorsque les feuilles et les autres débris s'accumulent dans vos gouttières et les obstruent, celles-ci retiennent l'eau, créant un milieu humide s'apparentant aux marécages. L'eau stagnante et les feuilles pourries deviennent alors un refuge idéal pour différents insectes, tels que les moustiques, qui viennent y pondre leurs œufs. Cela augmente le risque que votre famille, vos invités et vos animaux de compagnie soient victimes de piqûres. Pour éviter cela, il est important de vérifier régulièrement l'état de vos gouttières et de considérer l'installation d'un protège-gouttières. Cependant, notez que seuls certains modèles de protège-gouttière sont réellement efficaces, alors renseignez-vous bien avant d'en poser. Vous pouvez commencer par lire cette page pour avoir un aperçu."
    },
    {
        titre: "Contrat d'assurance",
        text: "Si vos gouttières sont mal installées ou mal entretenues, elles peuvent causer des moisissures qui endommageront les murs intérieurs de votre maison. Il est important de savoir que les dommages graduels résultant d'infiltrations d'eau ou de débordements répétés ne sont généralement pas couverts par les contrats d'assurance habitation. Si cela s'applique à vous, les travaux de réparation que vous effectuerez à la suite de ces types de problèmes ne seront pas indemnisés par votre assureur, et vous devrez les payer vous-même. Les coûts d'entretien préventif ne semblent-ils pas minimes en comparaison ?"
    }
    ];
    const texteP = [
        {text: "Au Québec, les maisons sont généralement construites sans barrière d'étanchéité posée contre le béton poreux des fondations. L'augmentation de la quantité d'eau dans le sol près des fondations peut contribuer aux problèmes d'humidité dans le sous-sol de la maison. Si l'eau n'est pas correctement drainée, elle peut même s'infiltrer dans le sous-sol et causer des dommages importants. Dans des cas extrêmes, l'eau gelée dans le sol peut adhérer aux fondations et provoquer des dommages structurels tels que des fissures. Il est même possible qu'une section de la maison, comme le garage, soit soulevée de quelques millimètres."},
        {text: "De plus, il convient de noter que les descentes des gouttières sont parfois branchées sur le drain de fondation, qui n'est pas conçu pour recevoir de grands volumes d'eau. Lorsque le drain de fondation est surchargé et qu'il ne peut plus remplir son rôle correctement, vous remarquerez une hausse significative du taux d'humidité dans le sous-sol. Cette surcharge peut même causer des efflorescences sur les murs de béton dénudés, ainsi que de la moisissure ou de la pourriture sur le plancher et la partie basse des murs. L'idéal est de prolonger les descentes des gouttières au sol, loin des fondations, sur un lit de gravier recouvert de gazon par exemple."}
      ];
    const texte3 = [{
        titre: "Conclusion",
        text: "En somme, l'entretien régulier de vos gouttières est essentiel pour éviter des dommages coûteux à votre maison, tels que des fissures dans les fondations, des infiltrations d'eau dans le sous-sol et des moisissures dans les murs intérieurs. De plus, cela peut également aider à prévenir la prolifération d'insectes indésirables et à réduire les risques pour la santé de votre famille, de vos invités et de vos animaux de compagnie. Prenez le temps de vérifier l'état de vos gouttières régulièrement et de les nettoyer ou de les réparer au besoin. Si vous n'êtes pas sûr de pouvoir effectuer les travaux vous-même, n'hésitez pas à contacter un professionnel pour obtenir de l'aide."
        }
    ];
  return (
    <div>
        <Head>
            <title>Pourquoi nettoyer ses gouttières ? - Gouttières Rive-Sud</title>
            <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/Pourquoi-entretenir-ses-gouttieres" />  
            <meta name="description" content="Découvrez pourquoi il est important d'entretenir régulièrement vos gouttières. Notre guide vous offre des avantages, des astuces et des outils pour maintenir vos gouttières en bon état et prévenir les dommages potentiels à votre toit et votre maison. Entretien de gouttière Grondin Rive-Sud. Téléphone : 1-888-851-6871" />
        </Head>
        
        <Header/>
            <AccueilArticle titre="Dommages aux gouttières : Tout ce que vous devez savoir"
                soustitre="Pour assurer l'efficacité de vos gouttières tout au long de l'année, il est crucial de les entretenir régulièrement. Cela permettra de prolonger leur durée de vie et d'éviter des coûts de réparation ou même de remplacement complet en cas de dommages importants. Voici quelques problèmes courants liés aux gouttières, ainsi que les solutions appropriées pour y faire face."
                imgsrc={Images.MaisonGouttiere2}
                alt="Maison luxueuse de longueuil nettoyée par les Entretiens Grondin Rive-Sud"/>

            <TexteArticleH2 titresEtTextesH2={texte} /> 

            <div className="imgBox--Article">
              <Image
                src={Images.Pelouse}
                alt="Accumulation des precipitations dans la Rive-Sud"
              />
            </div>

            <NumBar />


            <TexteArticleH2 titresEtTextesH2={texte1} /> 
            <div className="img-container-pourquoi">
              <Image
                src={imgToiture}
                alt="Toiture abimé et la gouttière pleines de débris qui va se faire nettoyer par gouttière Rive-Sud"
              />
            </div>
            <ParagrapheArticle texte={texteP} />

            <TexteArticleH2 titresEtTextesH2={texte2} />

            <TexteArticleH2 titresEtTextesH2={texte3} />

            <CarteForm/>
        <Footer/>

    </div>
  )
}

export default Pourquoi;