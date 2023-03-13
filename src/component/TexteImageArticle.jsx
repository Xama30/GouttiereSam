import "../App.css";

function TexteImageArticle({ titreh2, text, titres}) {
    return (
        <div>
            {titres.map((titre, text, index) =>
                <div key={index}>
                    <h2>{titre}</h2>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}

export default TexteImageArticle;