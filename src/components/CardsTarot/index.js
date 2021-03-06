import React, { useState, useEffect } from 'react';
import './CardsTarot.css';

const CardsTarot = ({ image, name, flipped, id, pathCard, cardsTarot, CardTurn }) => {
  const pathCards = !flipped ? pathCard.url + image : pathCard.cardBack;
  const [visibleCard, setVisibleCard] = useState("hide");
  
  useEffect(() => {
    setVisibleCard("visible");
  }, [visibleCard]);

  const GameStart = () => {  
    let index = cardsTarot.find( flipped => flipped.flipped === false );
    if( !index ) {
      CardTurn(id);
    } 
  }

  return (
    <>
      <div className="col l2 m4 s12">
        <div className="cards" onClick={ flipped ? GameStart : null }>
          <img src={pathCards} alt="Imagens" />
        </div>
        <div className={`card-body ${ !flipped ? visibleCard : "hide"}`}>
          <h2 className="card-title">{name}</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </>
  )
}

export default CardsTarot;