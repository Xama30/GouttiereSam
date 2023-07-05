import React from 'react'

function ParagrapheArticle({texte}) {
  return (
    <div>
    {texte.map(({text}, index) =>
        <div className="paragrapheArticle__content" key={index}>
            <p className="paragrapheArticle--texte">{text}</p>
        </div>
    )}
    </div>
  )
}

export default ParagrapheArticle