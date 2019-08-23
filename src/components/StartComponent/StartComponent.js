import React, { Component } from 'react';
import Iniciar from '../../images/adduser.png';



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
                        <div><img src={Iniciar} alt="Acerca de mi" width="120px" height="150px" /></div><br />
                            <h5 class="card-title">Como Registraste En La Plataforma</h5>
                            <p class="card-text">acá va a ir un video</p>
                            <a href="#" class="btn btn-warning">¡Ver Video!</a><br/>
                            
                        </div>
                    </div>
                </div>
            </div>

            

        );
    }

}

export default Start;