
function AccueilArticle ({titre, soustitre, imgsrc}) {
    
    return(
        <section>
            <div id="accueil__content">
                <div className="accueil--texte">
                    <h1>{titre}</h1>
                    <p>{soustitre}</p>
                </div>
                <div className="accueil-img">
                    <img src={imgsrc} alt="image de gouttières" />
                </div>
            </div>
        </section>
    );
}

export default AccueilArticle;

