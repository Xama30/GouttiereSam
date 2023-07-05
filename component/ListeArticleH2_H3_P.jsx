import React from 'react'

function ListeArticleH2_H3_P({titreh2, itemLists}) {
  return (
    <div className='ListeArticleH3_H2__content'>
        <h2 className='ListeArticleH3_H2--titre'>{titreh2}</h2>
        <ul className='ListeArticleH3_H2--liste'>
        {itemLists.map(({titreh3, texte}, index) => (
                <li key={index} className="ListeArticleH3_H2--item">
                  <h3>{titreh3}</h3>
                  <p>{texte}</p>
                </li>
        ))}
        </ul>
  </div>
  )
}

export default ListeArticleH2_H3_P