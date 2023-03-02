import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App(){
    return (
        <div>
            <Header/>
            <section id='section__accueil'>
                <div className='accueil__text-container'>
                    <h1>Goutière Rive-sud</h1>
                    <p>Ouvert du lundi au vendredi <br/> 8h à 17h</p>
                    <p>Soumission gratuite en ligne</p>
                    <p>Appelez-nous au : <br/> 1-888-851-6871</p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
export default App;