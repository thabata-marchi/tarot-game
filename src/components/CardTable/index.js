import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './CardTable.css';


const CardTable = () => {
  const [ cardsTarot, setCardsTarot ] = useState([]);
  const [ pathImg, setPathImg] = useState("");
  
  useEffect( () => {
    api.ShowCards()
    .then(response => {
      if( response.status === 200 ){
        setCardsTarot([...response.data.cards, response.data]);
        setPathImg(response.data.imagesUrl);
      }
  })
    .catch( error => console.log( error) )
  }, [cardsTarot])

  return(
    <>    
      <div className="container"> 
      <div className="row">
          <h1 className="center-align">Jogo de Tarot</h1>
          <button className="center btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">play_arrow</i>
          </button>
        </div>
        <div className="row">
          {
            cardsTarot.filter( ({image}) => image !== undefined)
              .map(({image}, index) => {
                  return (
                    <div key={index} className="col l2 m4 s12 cards">
                      <img src={pathImg + image} alt="Imagens" />
                    </div>
                  )
              })
          }
        </div>
      </div>
    </>
  ) 

}

export default CardTable;