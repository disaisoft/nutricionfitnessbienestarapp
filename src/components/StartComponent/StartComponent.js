import React, { Component } from 'react';
import Iniciar from '../../images/adduser.png';
import ReactPlayer from 'react-player';




export class Start extends Component {
    render(){
        return(
        <div className="container shadow p-3 mb-5 bg-white rounded " id="empezamos">
                <div className="">
                    <div class="card text-center border border-info bg-info text-white ">
                        <div class="card-header border border-info">
                            <h1>Empezamos</h1>
                        </div>
                        <div class="card-body">
                        <div><img src={Iniciar} alt="Acerca de mi" width="90px" height="120px" /></div><br />
                            <h5 class="card-title">Cómo Registrarse A La Plataforma</h5> 
                            <h4>Numero de Indentificación: C200323023</h4>
                            <h4>Apellido: López</h4>
                            <h6>Kit de Registro: Tiene un Costo de 150.000 pesos</h6>
                        </div>
                        <div className='player-wrapper container'>
                            <ReactPlayer
                                className='react-player'
                                url='https://www.youtube.com/watch?v=gL3hgyLDs4E'
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

export default Start;