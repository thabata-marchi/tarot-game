import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './CardTable.css';
import CardsTarot from '../CardsTarot';
import ButtonGame from '../ButtonGame';

const CardTable = () => {
  const [ clicked, setClicked ] = useState(false);
  const [ visible, setVisible ] = useState(true);

  const [ cardsTarot, setCardsTarot ] = useState([]);
  const [ pathCard, setPathCard ] = useState([]);

  useEffect(() => {
    api.ConnectApi()
    .then(response => {
      if( response.status === 200 ){
        const cards = response.data.cards;
        setCardsTarot(cards);
        setPathCard({url: response.data.imagesUrl, cardBack: response.data.imageBackCard});
      }
  })
    .catch( error => console.log( error) )
  }, [])  

  const filterCard = cardsTarot.filter(({image}) => image !== undefined);

  const ShowCard = () => 
    <div className="row cards-table">
      {filterCard
        .map(({name, image}, index) => 
          <CardsTarot 
          key={index}
          index={index} 
          name={name}
          image={image}
          pathCard={pathCard}
          setPathCard={setPathCard}
          visible={visible} 
          setVisible={setVisible}          
          clicked={clicked}
          setClicked={setClicked}
        />
      )}
    </div>


  return(
    <div className="container">   
      <ButtonGame 
        filterCard={filterCard}
        setCardsTarot={setCardsTarot}
        setVisible={setVisible} />
      <ShowCard />
    </div>
  ) 
}

export default CardTable;