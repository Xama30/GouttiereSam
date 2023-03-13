import React from 'react'

function ListeArticleH3({ titre, itemLists }) {
  return (
    <div className='ListeArticleH3__content'>
      <h3 className='ListeArticleH3--titre'>{titre}</h3>
      <ul className='ListeArticleH3--liste'>
        {itemLists.map((itemList, index) => (
          <li className="ListeArticleH3--item" key={index}>{itemList}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeArticleH3