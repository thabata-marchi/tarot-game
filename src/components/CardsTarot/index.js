import React, { useState } from 'react';

import './CardsTarot.css';

const CardsTarot = props => {

  const pathCards = props.visible ? props.pathImg + props.image : props.pathImgBack;
  const [shuffleCards, setShuffleCards] = useState(pathCards);

  const [cardSelect, setCardSelect] = useState('hide');



  const GameStart = () => {
    setCardSelect("visible");

    setShuffleCards(props.pathImg + props.image);
    // props.setCardsTurn(false)
    console.log("TESTE");
  }

  return (
    <>
      <div className="col l2 m4 s12">

        <div className="cards" onClick={!props.visible && props.cardsTurn ? GameStart : null}>
          <img src={shuffleCards} alt="Imagens" />
        </div>

        <div className={`card-body ${cardSelect}`}>
          <h2 className="card-title">{props.name}</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

      </div>
    </>
  )
}

export default CardsTarot;