import React from 'react';
import shuffle from 'shuffle-array';

const ButtonGame = props => {
  const GameInit = () => {
    props.setCardsTarot(shuffle(props.FilterCards));
    props.setVisible( false );
  }
  return (
    <>
      <h1 className="center-align">Jogo de Tarot</h1>
      <button onClick={GameInit} className="start-game center btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons">play_arrow</i>
      </button>    
    </>
  )
}

export default ButtonGame; 