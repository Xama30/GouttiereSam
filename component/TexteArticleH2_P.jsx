
function TexteArticleH2({ titresEtTextesH2 }) {
    return (
        <div>
            {titresEtTextesH2.map(({titre, text}, index) =>
                    <div className="h2Article__content" key={index}>
                        <h2 className="h2Article--titre">{titre}</h2>
                        <p className="h2Article--texte">{text}</p>
                    </div>
            )}
        </div>
    );
}

export default TexteArticleH2;