import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Images from '../public/img/Images';
import imgGouttieresPleines from '../public/img/professionnel-de-goutiere-rive-sud-qui-retire-les-feuilles-des-gouttieres.png';

const Header = dynamic(() => import('../component/Header'));
const AccueilArticle = dynamic(() => import('../component/AccueilArticle'));
const BoxTxtTitleIn = dynamic(() => import('../component/BoxTxt_TitleIn'));
const BorderTitle = dynamic(() => import('../component/BorderTitle'));
const NumBar = dynamic(() => import('../component/NumBar'));
const TexteArticleH2 = dynamic(() => import('../component/TexteArticleH2_P'));
const ListeArticleH3 = dynamic(() => import('../component/ListeArticleH3'));
const ListeArticleH2_H3_P = dynamic(() => import('../component/ListeArticleH2_H3_P'));
const ParagrapheArticle = dynamic(() => import('../component/ParagrapheArticle'));
const Footer = dynamic(() => import('../component/Footer'));
const Soumission = dynamic(() => import('../component/Soumission'));

function Quand(){

    const titresEtTextesH2 = [
        { titre: 'Quand nettoyer les gouttières? ', text: "La réponse à cette question dépend de plusieurs facteurs, notamment le climat, les arbres autour de votre maison et l'âge de votre toit. Voici quelques signes qui indiquent qu'il est temps de nettoyer vos gouttières :" },
    ];
    const titresEtTextesH22 = [
      { titre: 'Entretien régulier de vos gouttières', text: "Bien que vous puissiez avoir l'impression que vos gouttières sont en bon état, il est important de savoir qu'elles nécessitent un nettoyage au moins une fois par an. Si vous n'avez pas d'arbre mature qui surplombe votre maison, un nettoyage annuel pourrait suffire. Cependant, les experts recommandent idéalement deux nettoyages annuels pour assurer leur bon fonctionnement." },
    ];
    
    const itemList = ['Des plantes ou des arbustes poussent dans vos gouttières.', "Vous constatez une accumulation d'eau ou de neige fondue sur votre toit.", "Vous observez des débris tels que des feuilles, des branches ou des nids d'oiseaux dans vos gouttières.", "L'eau ne s'écoule pas correctement lorsque vous arrosez votre pelouse ou vos plantes.", "Vous voyez des fissures ou des dommages sur vos gouttières."];
    
    const itemLists = [
      { titreh3: 'Le type de toit que vous avez', texte: "Le type de toit que vous avez peut déterminer la fréquence à laquelle vous devez nettoyer vos gouttières. Si vous avez des arbres qui surplombent votre toit, les gouttières peuvent se remplir de feuilles, de branches et de brindilles plus rapidement. Dans ce cas, vous devez nettoyer vos gouttières plus souvent." },
      { titreh3: 'La quantité de précipitations', texte: "Si vous vivez dans une région où il pleut souvent, vous devez nettoyer vos gouttières plus souvent. Cela est dû au fait que les gouttières doivent évacuer une plus grande quantité d'eau de pluie, ce qui peut les obstruer plus rapidement." },
      { titreh3: "La présence d'arbres autour de votre maison", texte: "Si vous avez des arbres autour de votre maison, les feuilles, les branches peuvent s'accumuler et former un bouchon. Dans ce cas, laver ses gouttières plus souvent peut être nécessaire." },
      { titreh3: "L'état de vos gouttières", texte: "Si vos gouttières sont en bon état et fonctionnent correctement, vous pouvez les nettoyer moins souvent. En revanche, si vos gouttières sont endommagées ou ont des fuites, elles doivent être nettoyées plus régulièrement pour éviter des problèmes plus graves." },
      { titreh3: "La période de l'année", texte: "La période de l'année peut également affecter la fréquence à laquelle vous devez nettoyer vos gouttières. En général, il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l'automne. Le nettoyage de printemps permet de retirer les débris accumulés pendant l'hiver et le nettoyage d'automne permet de préparer les gouttières pour l'hiver." },
      { titreh3: 'Faites appel à un professionnel', texte: "Si vous n'êtes pas à l'aise avec l'idée de nettoyer vos gouttières vous-même, ou si vous n'avez pas le temps ou l'équipement nécessaires, il est recommandé de faire appel à un professionnel pour le faire pour vous. Les professionnels peuvent inspecter vos gouttières, réparer les dommages et nettoyer les débris en toute sécurité." },
    ];

    const texte = [
      {text: "Les moments propices pour les nettoyer peuvent varier en fonction des essences d'arbres qui se trouvent près de votre maison. En effet, les arbres ne perdent pas leurs feuilles, épines, bourgeons ou fruits tous au même moment. Pour un nettoyage efficace, il est conseillé de prévoir une première intervention à la fin de l'automne pour retirer les feuilles mortes une fois leur chute terminée. La seconde intervention serait préférable à la fin du printemps pour enlever les bourgeons et fruits tels que les samares."},
      {text: "Si votre maison est entourée d'arbres non-feuillus ou que votre toiture est en bardeaux d'asphalte, il est recommandé de retirer les granules qui s'accumulent dans vos gouttières tous les cinq ans."},
      {text: "En résumé, l'entretien régulier de vos gouttières est primordial pour éviter des problèmes de stagnation d'eau et préserver leur durabilité. Il est conseillé de contacter des professionnels pour effectuer les nettoyages si nécessaire."}
    ];

    return(
      <div>
            <Head>
              <title>Quand nettoyer ses gouttières ? - Gouttière Rive-Sud</title>
              <link rel="canonical" href="https://entretiensgouttieresrivesud.ca/Quand-nettoyer-ses-gouttieres" />
              <meta name="description" content="Découvrez nos conseils pratiques pour savoir quand nettoyer vos gouttières. Apprenez à identifier les signes de gouttières sales et obstruées, et découvrez à quelle fréquence vous devriez les nettoyer pour maintenir un toit propre et prévenir les dommages potentiels. Entretien de gouttière Grondin Rive-Sud." />
            </Head>
            <Header />
            <AccueilArticle
              titre="Quand Nettoyer Ses Gouttières ?"
              soustitre="Dans la plupart des cas, le nettoyage des gouttières devrait être exécuté idéalement deux fois par année. Un entretien déficient peut engendrer de lourdes et coûteuses conséquences. Consultez cette page pour connaître les multiples raisons pour lesquelles vous avez avantage à nettoyer vos gouttières régulièrement." 
              imgsrc={Images.carte2}
              alt="Gouttière qui déborde dans la région de la Rive-Sud"
            />

            <div className="title-list-img-frame">
              <div className="title-list-container">
                <TexteArticleH2 titresEtTextesH2={titresEtTextesH2}/>
                <ListeArticleH3 titre="Signes qu'il est temps de nettoyer vos gouttières :" itemLists={itemList} />
              </div>
              <div className="img-container">
                <Image
                  src={imgGouttieresPleines}
                  alt="Homme à l'emploie de Gouttiere Rive-Sud qui nettoye une gouttière"
                />
              </div>
            </div>

            <BoxTxtTitleIn
              color="G"
              title="À quelle fréquence nettoyer les gouttières ?"
              texts={["En général, il est recommandé de nettoyer vos gouttières au moins deux fois par an, une fois au printemps et une fois à l'automne. Cependant, cela peut varier en fonction des conditions climatiques et du nombre d'arbres autour de votre maison. Si vous habitez dans une région où il pleut beaucoup ou si vous avez beaucoup d'arbres, vous devrez peut-être nettoyer vos gouttières plus souvent."]}
              detail="F"
            />

            <ListeArticleH2_H3_P titreh2="Les facteurs extérieurs" itemLists={itemLists} />

            <NumBar/>

            <div className="imgBox--Article">
              <Image
                  src={Images.GouttiereEau}
                  alt="Eau qui s'accumule dans une gouttière nettoyé par gouttière Rive-Sud"
                />
            </div>

            <TexteArticleH2 titresEtTextesH2={titresEtTextesH22}/>
            <ParagrapheArticle texte={texte} />

            <Soumission/>

            <BorderTitle title="Des solutions d'entretien et de protection des gouttières"
            text="Outre le nettoyage régulier des gouttières, l'installation de protège-gouttières est une solution alternative efficace pour minimiser les problèmes de gouttières obstruées et réduire la nécessité d'un entretien fréquent. Les protège-gouttières peuvent empêcher les feuilles et les débris de pénétrer dans les gouttières, ce qui permet à l'eau de s'écouler librement. Bien qu'ils puissent être coûteux à installer, leur utilisation est un investissement rentable à long terme car ils prolongent la durée de vie des gouttières et empêchent les problèmes de drainage qui peuvent endommager la fondation de la maison. En outre, les protège-gouttières nécessitent peu d'entretien et éliminent le besoin de nettoyages fréquents et fastidieux. Profitez dès maintenant de l'installation de protège-gouttières pour un système de gouttières efficace et sans soucis!" detail="T"
            link="/Tout-savoir-sur-les-pare-feuilles"
            className="paddingBorderTitle"/>

            <Footer/>
        </div>
    );
}
export default Quand;