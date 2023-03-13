import '../CSS/Quand.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import AccueilArticle from '../component/AccueilArticle';
import Images from '../img/Images';
import BoxTxtTitleIn from '../component/BoxTxt_TitleIn';
import TexteImageArticle from '../component/TexteImageArticle';

function Quand(){
    const titres = [
        {titre: 'Titre', text: 'Texte'},
    ];
    return(
        <div>
            <Header />
            <AccueilArticle
            titre="Quand Nettoyer Ses Gouttières ?"
            soustitre="Dans la plupart des cas, le nettoyage des gouttières devrait être exécuté idéalement deux fois par année. Un entretien déficient peut engendrer de lourdes et coûteuses conséquences. Consultez cette page pour connaître les multiples raisons pour lesquelles vous avez avantage à nettoyer vos gouttières régulièrement." 
            imgsrc={Images.carte2}/>

            <BoxTxtTitleIn
            color="G"
            title="À quelle fréquence nettoyer les gouttières ?"
            texts={["En général, il est recommandé de nettoyer vos gouttières au moins deux fois par an, une fois au printemps et une fois à l'automne. Cependant, cela peut varier en fonction des conditions climatiques et du nombre d'arbres autour de votre maison. Si vous habitez dans une région où il pleut beaucoup ou si vous avez beaucoup d'arbres, vous devrez peut-être nettoyer vos gouttières plus souvent."]}
            detail="F"/>

            <TexteImageArticle
            titres={titres}/>

            <Footer/>
        </div>
    );
}
export default Quand;