import React, { Component } from 'react';
import './Styles/RequirementsComponent.css';


export class Requirements extends Component {
  render() {
    return (
      <div className="container shadow p-3 mb-5 bg-white rounded">
            <ul class="list-group">
                <li class="list-group-item active text-center">Requisitos & Beneficios</li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-laptop mx-3"></i>Tener una PC o Celular</a></li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-internet-explorer mx-3"></i></a>Tener acceso a internet</li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-money mx-3"></i></a>Generaras Ingresos desde la primera semana</li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-plane mx-3"></i></a>Trabajaras desde cualquier parte</li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-hand-o-right mx-3"></i>Aprenderas a liderar grupos</a></li>
            </ul>
      </div>



    );
  }

}

export default Requirements;