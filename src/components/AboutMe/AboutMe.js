import React, { Component } from 'react';
//import  from '../../images/onearm.jpeg';
import Acercade from '../../images/acercademi1.png';
import './Styles/StylesAboutMe.css';


export class AboutMe extends Component {
    render() {
        return (

            <div className="container shadow p-3 mb-5 bg-white rounded" id="acercade">
                <div className="">
                    <div class="card text-center border border-success bg-success text-white">
                        <div class="card-header border border-success">
                            <h1>Acerca de mi</h1>
                        </div>
                        <div class="card-body">
                            <div><img src={Acercade} alt="Acerca de mi" width="180px" height="180px" /></div><br />
                        
                            <h5 class="card-title">David I. López F.</h5>
                            
                            <p class="card-text">¿Quien soy?
                            ¡Una persona comprometida que está dispuesta a ayudar a los demás a cambiar sus vidas positivamente!
                            me dicen Dave, Soy una persona joven con grandes sueños y metas. ¡mi vida gira entorno a una vida deportiva! Lo que hago es simple: Enseño a personas de todo el mundo acerca de una nutrición adecuada y los inspiro a vivir un estilo de vida saludable y activo.
                            Mi objetivo es conectarme con mis asociados a nivel personal y profesional, siempre estoy dispuesto a darte todo mi apoyo durante este proceso. Esto en muchos casos conduce a lazos familiares.
                            Me encanta lo que hago.
                            ¡Comencemos tu transformación! ¡Contáctame para comenzar!</p>
                            
                            <a href="https://api.whatsapp.com/send?phone=573117056041&text=Hola!!%20quiero%20APRENDER%20A%20GENERAR%20INGRESOS%20EXTRAS%20DESDE%20CASA.%20Mi%20Nombre,%20Apellido,%20Ciudad%20y%20Pais%20Es:%20" class="btn btn-danger" target="_blank">¡Contáctar!</a>
                            
                        </div>
                    </div>
                </div>
            </div>


            

        );
    }
}

export default AboutMe;