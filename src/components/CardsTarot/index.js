import React, { useState } from 'react';

const CardsTarot = props => {

  const [ shuffleCards, setshuffleCards ] = useState(props.visible ? props.pathImg + props.image : props.pathImgBack);  

  const GameStart = () => {    
    setshuffleCards( props.pathImg + props.image ) 
  }

  return(
    <div className="col l2 m4 s12 cards" onClick={ !props.visible ? GameStart : null}>
      <img src={shuffleCards} alt="Imagens" />
    </div>
  )
}

export default CardsTarot;