import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './CardTable.css';

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
  }, [cardsTarot])

  const GameInit = () => {
    setVisible( false );
  }
  
  return(
    <>    
      <div className="container"> 

        <h1 className="center-align">Jogo de Tarot</h1>
        <button onClick={GameInit} className="start-game center btn-floating btn-large waves-effect waves-light red">
          <i className="material-icons">play_arrow</i>
        </button>

        <div className="row">
          {
            cardsTarot.filter( ({image}) => image !== undefined )
            .map(({image}, index) => {
              if(visible){
                return(
                  <div key={index} className="col l2 m4 s12 cards">
                    <img src={pathImg + image} alt="Imagens" />
                  </div>      
                )                
              } else {
                return(
                  <div key={index} className="col l2 m4 s12 cards">
                    <img src={pathImgBack} alt="Imagens" />
                  </div>      
                )  
              }
            })
          }
        </div>

      </div>
    </>
  ) 
}

export default CardTable;