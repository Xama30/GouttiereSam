import '../CSS/Informations.css';
import Header from "../component/Header";
import Footer from "../component/Footer";
import TopMainPage from "../component/TopMainPage";
import BoxTxtTitleIn from "../component/BoxTxt_TitleIn";
import CardInfo from "../component/Card_Info";
import NumBar from '../component/NumBar';
import BorderTitle from '../component/BorderTitle';

function Informations(){
    return(
        <div>
            <Header/>
            <TopMainPage
                title="Gouttières"
                text="Les gouttières sont un élément important de votre toiture et de votre maison, mais les connaissez-vous vraiment ? Savez-vous comment elles fonctionnent pour protéger votre maison contre les dégâts d'eau ? Les gouttières permettent de recueillir l'eau de pluie et de la diriger loin de votre maison, évitant ainsi les dégâts d'eau, les infiltrations et les moisissures. Elles sont souvent négligées dans l'entretien de la maison, mais nettoyer régulièrement vos gouttières est essentiel pour assurer leur bon fonctionnement."
            />
            <BoxTxtTitleIn
                color="L"
                title="Pourquoi les gouttières sont-elles importantes ?"
                texts={["Les gouttières jouent un rôle crucial dans la protection de votre maison contre les dégâts d'eau. En évacuant l'eau de pluie, les gouttières empêchent l'eau de s'accumuler sur le toit et de pénétrer dans la maison. Cela peut prévenir les fuites, les infiltrations d'eau et les dégâts structurels qui peuvent être coûteux à réparer."]}
                detail="T"/>
            <BoxTxtTitleIn
                color="G"
                title="Quand nettoyer ses gouttières"
                texts={["Nettoyer régulièrement les gouttières est également crucial pour maintenir leur efficacité dans la protection de votre maison contre les dégâts d'eau. Les feuilles, les brindilles, les débris et les branches qui s'accumulent dans les gouttières peuvent obstruer le flux d'eau et provoquer des débordements et des fuites d'eau."]}
                detail="T"/>
            <section id="Info__TCarte">
                <CardInfo
                    title="Comment nettoyer ses gouttières ?"
                    text="Découvrez dans cet article comment nettoyer vos gouttières facilement et efficacement pour éviter les obstructions et les fuites d'eau, et ainsi prolonger leur durée de vie et protéger votre maison des dégâts d'eau."
                    />
                <CardInfo
                    title="Pourquoi faire appel à un expert?"
                    text="Engager un expert pour le nettoyage de vos gouttières garantit un nettoyage complet et en toute sécurité, ainsi qu'un entretien professionnel pour prolonger la durée de vie de votre système de drainage."
                    />
                <CardInfo
                    title="Nettoyer ses gouttières soi-même"
                    text="Nettoyer soi-même ses gouttières peut être dangereux et causer des blessures ou des dégâts matériels, en plus de ne pas garantir un nettoyage complet et efficace."
                    />
            </section>
            <NumBar/>
            <div className='title__IG'>
                <h2>Informations générales</h2>
            </div>
            <section id="Info__Gouttiere">
                <BorderTitle
                title="Quels sont les différents types de gouttières? "
                text=" Il existe différents types de gouttières, chacun ayant ses avantages et ses inconvénients en termes de durabilité, de coûts, d'esthétique et de facilité d'installation et d'entretien. Que vous cherchiez une gouttière en aluminium, en cuivre, en acier galvanisé ou en PVC, il est important de choisir le type de gouttière qui convient le mieux à votre maison et à votre budget."
                detail="T"/>
                <BorderTitle
                title="Quels sont les différents types de pare-feuilles? "
                text="Les pare-feuilles de gouttière sont des accessoires utiles qui empêchent les feuilles, les débris et autres saletés de boucher vos gouttières. Ils peuvent également réduire le risque d'incendie en empêchant les feuilles sèches et autres matières combustibles de s'accumuler dans vos gouttières. Il existe différents types de pare-feuilles de gouttière, chacun avec ses propres avantages et inconvénients en termes de durabilité, de coûts et d'efficacité."
                detail="T"/>
            </section>


            <Footer/>
        </div>
    );
}
export default Informations;