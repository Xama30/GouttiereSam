import Image from 'next/image';

function AccueilArticle ({titre, soustitre, imgsrc, alt}) {
    
    return(
        <section>
            <div id="accueil__content">
                <div className="accueil--texte">
                    <h1>{titre}</h1>
                    <p>{soustitre}</p>
                </div>
                <div className="accueil-img">
                    <Image
                        src={imgsrc}
                        alt={alt}
                    />
                </div>
            </div>
        </section>
    );
}

export default AccueilArticle;

