import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './CardTable.css';
import CardsTarot from '../CardsTarot';
import ButtonGame from '../ButtonGame';

const CardTable = () => {
  const [ clicked, setClicked ] = useState(false);
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

  const FilterCards = cardsTarot.filter(({image}) => image !== undefined );
  const ShowCard = () => 
    <div className="row cards-table">
      {FilterCards
        .map(({name, image}, index) => 
          <CardsTarot 
            key={index}
            cardsTarot={cardsTarot}
            index={index} 
            name={name}
            image={image} 
            pathImg={pathImg}
            pathImgBack={pathImgBack}
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
        setCardsTarot={setCardsTarot}
        FilterCards={FilterCards}
        setVisible={setVisible} />
      <ShowCard />
    </div>
  ) 
}

export default CardTable;