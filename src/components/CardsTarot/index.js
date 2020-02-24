import React, { useState } from 'react';

import './CardsTarot.css';

const CardsTarot = ({image, name, pathCard, visible, clicked, setClicked }) => {

  const pathCards = visible ? pathCard.url + image : pathCard.cardBack;
  const [shuffleCards, setShuffleCards] = useState(pathCards);

  const [cardSelect, setCardSelect] = useState('hide');


  const GameStart = () => {
    setCardSelect("visible");
    setShuffleCards(pathCard.url + image);
  }

  return (
    <>
      <div className="col l2 m4 s12">

        <div className={`cards ${visible}`} onClick={ !visible && !clicked ? GameStart : null }>
          <img src={shuffleCards} alt="Imagens" />
        </div>

        <div className={`card-body ${cardSelect}`}>
          <h2 className="card-title">{name}</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

      </div>
    </>
  )
}

export default CardsTarot;