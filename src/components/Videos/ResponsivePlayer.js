import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './ResponsiblePlayer.css';


const ResponsivePlayer = () => {

      return (
        <div className='player-wrapper container'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='50%'
            height='50%'
          />
        </div>
      )
  }

export default ResponsivePlayer;