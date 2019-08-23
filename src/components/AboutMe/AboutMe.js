import React, { Component } from 'react';
//import  from '../../images/onearm.jpeg';
import Acercade from '../../images/acercademi.png';


export class AboutMe extends Component {
    render() {
        return (

            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div className="">
                    <div class="card text-center border border-success bg-success text-white">
                        <div class="card-header border border-success">
                            <h1>Acerca de mi</h1>
                        </div>
                        <div class="card-body">
                            <div><img src={Acercade} alt="Acerca de mi" width="180px" height="180px" /></div><br />
                        
                            <h5 class="card-title">David I. López F.</h5>
                            
                            <p class="card-text">¿Quienes soy?
                            ¡Una persona comprometida que esta dispuesta a ayudar a los demas a cambiar sus vidas!
                            me llaman Dave, Soy una persona joven con grandes sueños y metas, ¡mi vida que gira en torno a una vida deportiva! Lo que hago es simple; Enseño a personas de todo el mundo acerca de una nutrición adecuada y los inspiro a vivir un estilo de vida saludable y activo.
                            Mi objetivo es conectarme con mis asociados a nivel personal y estoy siempre dispuesto a darte todo mi apoyo durante todo este proceso. Esto en muchos casos conduce a lazos irrompibles y familiares.
                            Me encanta lo que hago.
                            ¡Comencemos tu transformación! ¡Contáctame para comenzar!</p>
                            <a href="#" class="btn btn-danger">¡Contáctar!</a><br/>
                            
                        </div>
                    </div>
                </div>
            </div>


            

        );
    }
}

export default AboutMe;