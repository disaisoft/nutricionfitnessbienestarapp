import React, { Component } from 'react'
import Fruit from '../../images/fruit.jpg';
import Ocean from '../../images/ocean.jpg'
import Run from '../../images/run.jpg'


export class FinishComponent extends Component {
    render() {
        return (
            
        <div className="bd-example container">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Fruit} className="d-block w-100" height="" width="" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Ocean} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src={Run} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
        )
    }
}

export default FinishComponent;