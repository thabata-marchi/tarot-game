import React, { useState, useEffect } from 'react';
import api from '../../services/api';

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
    .catch( error => console.log(error) )
  }, [cardsTarot])

  return(
    <>    
      <div className="container">
        <div className="row">
          <h1 className="text-center">Jogo de Tarot</h1>
        </div>
        <div className="row">
          {
            cardsTarot.filter( ({image}) => image !== undefined)
              .map(({image}, index) => {
                  return (
                    <div key={index} className="col-md-2 col-sm-4 col-xs-12 mt-2 mb-3">
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