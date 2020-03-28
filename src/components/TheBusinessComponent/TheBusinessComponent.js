import React, { Component } from 'react';
import Negocio from '../../images/ingresos.png';
import ReactPlayer from 'react-player';


export class Business extends Component {
    render(){
        return(
        <div className="container shadow p-3 mb-5 bg-white rounded" id="elnegocio">
                <div className="">
                    <div class="card text-center  bg-dark text-white">
                        <div class="card-header ">
                            <h1>El Negocio</h1>
                        </div>
                        <div class="card-body">
                        <div><img src={Negocio} alt="Acerca de mi" width="150px" height="100px" /></div><br />
                            <h5 class="card-title">Como Iniciar Tu Negocio Online</h5>
                            <a href="#" class="btn btn-success">¡Ver Video!</a><br/>             
                        </div>
                        <div className='player-wrapper container'>
                            <ReactPlayer
                                className='react-player'
                                url='https://youtu.be/Z8kzKE5eek4'
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

export default Business;