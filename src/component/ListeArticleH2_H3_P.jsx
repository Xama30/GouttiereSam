import React from 'react'

function ListeArticleH2_H3_P({titreh2, itemLists}) {
  return (
    <div className='ListeArticleH3__content'>
        <h2 className='ListeArticleH3--titre'>{titreh2}</h2>
        <ul className='ListeArticleH3--liste'>
        {itemLists.map(({titreh3, texte}, index) => (
            <div key={index}>
                <li className="ListeArticleH3--item"><h3>{titreh3}</h3></li>
                <p>{texte}</p>
            </div>
        ))}
        </ul>
  </div>
  )
}

export default ListeArticleH2_H3_P