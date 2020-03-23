import React from 'react';
//import '../VideoComponent/VideoComponent.css';
import { Player } from 'video-react';
import Cards from '../CardsComponent/CardsComponent';

export default props => {
  return (

    <div className="container-fluid" >
    <Player
      playsInline
      poster="../../assets/f1_con_leche.mp4"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
  );
};