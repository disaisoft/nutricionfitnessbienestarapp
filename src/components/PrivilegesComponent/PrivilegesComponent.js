import React, { Component } from 'react';
import './Styles/PrivilegesComponent.css';


export class Privileges extends Component {
  render() {
    return (
      <div className="container shadow p-3 mb-5 bg-white rounded">
            <ul class="list-group">
                <li class="list-group-item active text-center">Privilegios</li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-check-square-o mx-3"></i>Entrenamiento 1 a 1</a></li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-check-square-o mx-3"></i>Chat Motivacional 24/7</a></li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-check-square-o mx-3"></i>Rutina de Entrenamientos</a></li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-check-square-o mx-3"></i>Plan de Comidas</a></li>
                <li class="list-group-item"><a class="" ><i class="fa fa-fw fa-check-square-o mx-3"></i>Lista de Meriendas</a></li>
            </ul>
      </div>



    );
  }

}

export default Privileges;