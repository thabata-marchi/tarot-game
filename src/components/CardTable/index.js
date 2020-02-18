import React, { useState, useEffect } from 'react';
import shuffle from 'shuffle-array';
import api from '../../services/api';

import './CardTable.css';
import CardsTarot from '../CardsTarot';

const CardTable = () => {
  const [ cardsTarot, setCardsTarot ] = useState([]);
  const [ pathImg, setPathImg] = useState("");
  const [ pathImgBack, setPathImgBack] = useState("");  
  const [ visible, setVisible ] = useState(true);

  useEffect(() => {
    api.ConnectApi()
    .then(response => {
      if( response.status === 200 ){
        setCardsTarot([...response.data.cards, response.data]);
        setPathImg(response.data.imagesUrl);
        setPathImgBack(response.data.imageBackCard);
      }
  })
    .catch( error => console.log( error) )
  }, [])  

  const GameInit = () => {
    setCardsTarot(shuffle(FilterCards));
    setVisible( false );
  }

  const FilterCards = cardsTarot.filter(({image}) => image !== undefined );

  const ShowCard = () =>
    FilterCards
    .map(({image}, index) => 
      <CardsTarot key={index} visible={visible} pathImg={pathImg} pathImgBack={pathImgBack} image={image} index={index} />
    )

  return(
    <>    
      <div className="container">   

        <h1 className="center-align">Jogo de Tarot</h1>
        <button onClick={GameInit} className="start-game center btn-floating btn-large waves-effect waves-light red">
          <i className="material-icons">play_arrow</i>
        </button>

        <div className="row">
          <ShowCard />
        </div>

      </div>
    </>
  ) 
}

export default CardTable;