import React, { Component } from 'react';
import Testimonies from '../../images/testimonies.png';
import ReactPlayer from 'react-player';


export class Testimonials extends Component {
    render(){
        return(
        <div className="container shadow p-3 mb-5 bg-white rounded" id="testimonios">
                <div className="">
                    <div class="card text-center border border-success bg-success text-white">
                        <div class="card-header border border-success">
                            <h1>Testimonios</h1>
                        </div>
                        <div class="card-body">
                        <div><img src={Testimonies} alt="Testimonies" width="140px" height="140px" /></div><br />
                            <h5 class="card-title">He Aquí Algunos Testimonios</h5>  
                        </div>
                        <div className='player-wrapper container'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/O1xLwTy-l84'
                                width='100%'
                                height='100%'
                                controls={true}
                                position='center'
                            />
                            </div>
                    </div>
                   
                </div>     
                
            </div>

        );
    }

}

export default Testimonials;