import React from 'react';

function TexteArticleH3( titresEtTextesH3 ){
  return (
    <div>
        {titresEtTextesH3.map(({titre, text}, index) =>
            <div className="h3Article__content" key={index}>
                <h3 className="h3Article--titre">{titre}</h3>
                <p className="h3Article--texte">{text}</p>
            </div>
        )}
</div>
  )
}

export default TexteArticleH3