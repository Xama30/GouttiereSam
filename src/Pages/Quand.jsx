import '../CSS/Quand.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import AccueilArticle from '../component/AccueilArticle';
import Images from '../img/Images';
import BoxTxtTitleIn from '../component/BoxTxt_TitleIn';
import TexteArticleH2 from '../component/TexteArticleH2';
import ListeArticleH3 from '../component/ListeArticleH3';
import ListeArticleH2_H3_P from '../component/ListeArticleH2_H3_P';
import NumBar from '../component/NumBar';

function Quand(){
    const titresEtTextesH2 = [
        { titre: 'Quand nettoyer les gouttières? ', text: "La réponse à cette question dépend de plusieurs facteurs, notamment le climat, les arbres autour de votre maison et l'âge de votre toit. Voici quelques signes qui indiquent qu'il est temps de nettoyer vos gouttières :" },
      ];

    const itemList = ['Des plantes ou des arbustes poussent dans vos gouttières.', "Vous constatez une accumulation d'eau ou de neige fondue sur votre toit.", "Vous observez des débris tels que des feuilles, des branches ou des nids d'oiseaux dans vos gouttières.", "L'eau ne s'écoule pas correctement lorsque vous arrosez votre pelouse ou vos plantes.", "Vous voyez des fissures ou des dommages sur vos gouttières."];

    const itemLists = [
        { titreh3: 'Le type de toit que vous avez', texte: "Le type de toit que vous avez peut déterminer la fréquence à laquelle vous devez nettoyer vos gouttières. Si vous avez des arbres qui surplombent votre toit, les gouttières peuvent se remplir de feuilles, de branches et de brindilles plus rapidement. Dans ce cas, vous devez nettoyer vos gouttières plus souvent." },
        { titreh3: 'La quantité de précipitations', texte: "Si vous vivez dans une région où il pleut souvent, vous devez nettoyer vos gouttières plus souvent. Cela est dû au fait que les gouttières doivent évacuer une plus grande quantité d'eau de pluie, ce qui peut les obstruer plus rapidement." },
        { titreh3: "La présence d'arbres autour de votre maison", texte: "Si vous avez des arbres autour de votre maison, les feuilles, les branches peuvent s'accumuler ett former un bouchon. Dans ce cas, laver ses gouttières plus souvent peut être nécessaire." },
        { titreh3: "L'état de vos gouttières", texte: "Si vos gouttières sont en bon état et fonctionnent correctement, vous pouvez les nettoyer moins souvent. En revanche, si vos gouttières sont endommagées ou ont des fuites, elles doivent être nettoyées plus régulièrement pour éviter des problèmes plus graves." },
        { titreh3: "La période de l'année", texte: "La période de l'année peut également affecter la fréquence à laquelle vous devez nettoyer vos gouttières. En général, il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l'automne. Le nettoyage de printemps permet de retirer les débris accumulés pendant l'hiver et le nettoyage d'automne permet de préparer les gouttières pour l'hiver." },
        { titreh3: 'Faites appel à un professionnel', texte: "Si vous n'êtes pas à l'aise avec l'idée de nettoyer vos gouttières vous-même, ou si vous n'avez pas le temps ou l'équipement nécessaires, il est recommandé de faire appel à un professionnel pour le faire pour vous. Les professionnels peuvent inspecter vos gouttières, réparer les dommages et nettoyer les débris en toute sécurité." },
      ];
    return(
        <div>
            <Header />
            <AccueilArticle
            titre="Quand Nettoyer Ses Gouttières ?"
            soustitre="Dans la plupart des cas, le nettoyage des gouttières devrait être exécuté idéalement deux fois par année. Un entretien déficient peut engendrer de lourdes et coûteuses conséquences. Consultez cette page pour connaître les multiples raisons pour lesquelles vous avez avantage à nettoyer vos gouttières régulièrement." 
            imgsrc={Images.carte2}/>

            <TexteArticleH2 titresEtTextesH2={titresEtTextesH2}/>
            <ListeArticleH3 titre="Signes qu'il est temps de nettoyer vos gouttières :" itemLists={itemList} />

            <BoxTxtTitleIn
            color="G"
            title="À quelle fréquence nettoyer les gouttières ?"
            texts={["En général, il est recommandé de nettoyer vos gouttières au moins deux fois par an, une fois au printemps et une fois à l'automne. Cependant, cela peut varier en fonction des conditions climatiques et du nombre d'arbres autour de votre maison. Si vous habitez dans une région où il pleut beaucoup ou si vous avez beaucoup d'arbres, vous devrez peut-être nettoyer vos gouttières plus souvent."]}
            detail="F"/>

            <ListeArticleH2_H3_P titreh2="Les facteurs extérieurs" itemLists={itemLists} />

            <NumBar/>

            <div className="imgBox--Article">
              <img src={Images.carte2} alt="Une image de gouttière" />
            </div>

            <Footer/>
        </div>
    );
}
export default Quand;