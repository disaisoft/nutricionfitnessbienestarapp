import React, { Component } from 'react';
import './Styles/CardsComponent.css';


export class Cards extends Component {
  render() {
    return (
      <div className="container shadow p-3 mb-5 bg-white rounded">
        <div class="accordion  " id="accordionExample">
          <div class="card">
            <div class="card-header text-center " id="headingOne">
              <h2 class="mb-0 ">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h4>Nutrición</h4>
                </button>
              </h2>
            </div>

            <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body bg-dark text-white">
                <p>La importancia de la nutrición para el buen funcionamiento del organismo radica fundamentalmente en que los hábitos alimenticios sean adecuados. Si bien parece simple corregir malos hábitos, la realidad nos muestra que es mucho más complicado de lo que parece y que las enfermedades relacionadas con la nutrición son hoy en día una preocupación mundial.
                Se estima que la obesidad tanto como la desnutrición afectan a la mayor parte de la población mundial. Por este motivo, la educación en nutrición y las campañas informativas se han convertido en las líneas de actuación principales de los programas de Políticas de Salud preventiva en todo el mundo. Estas campañas pueden ser de gran ayuda a la hora de concientizar y dar información interesante y práctica para cambiar los malos hábitos.
                La nutrición es salud. El consumo diario de estos nutrientes, así como llevar a acabo hábitos saludables, como la práctica de actividad física de forma regular, son unos de los pilares de la buena salud y el desarrollo físico y mental. Es por ello que la nutrición contribuye de manera directa para reforzar el sistema inmunitario, contraer menos enfermedades y en definitiva, tener una buena salud.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header text-center" id="headingTwo">
              <h2 class="mb-0 ">
                <button class="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h4>Fitness</h4>
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse bg-dark text-white" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <p>
                Bajo la acepción fitness se esconden dos definiciones muy vinculadas. En primer lugar, entendemos por fitness el estado de salud física y bienestar que se consigue al llevar una vida sana apoyada en el ejercicio continuado en el tiempo y en una dieta saludable. En segundo lugar, también se define como fitness al conjunto de ejercicios gimnásticos que se repiten varias veces por semana para conseguir una buena forma física. Normalmente estos ejercicios se realizan en espacios deportivos específicos, como los gimnasios.

Los objetivos de esta práctica deportiva son mejorar la resistencia aeróbica, tener mayor flexibilidad, conseguir fuerza muscular, conseguir una fuerza muscular localizada y lograr el equilibro corporal (ha de respetar unos porcentajes de lo que se considera sano en músculos, huesos y grasas).

Durante años el fitness ha estado en auge en Estados Unidos, pero su trascendencia ya se ha extendido a Europa y algunos países de América del Sur, como Colombia.

Los deportistas que acuden a esta disciplina deportiva suelen realizar series de carreras, sentadillas, flexiones y saltos combinados con ejercicios de disciplinas como el breakdance.
                </p>
              </div>
            </div>
          </div>
          <div class="card ">
            <div class="card-header  text-center " id="headingThree">
              <h2 class="mb-0 ">
                <button class="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h4>Bienestar</h4>
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse bg-dark text-white " aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body ">
                <p>
                La noción de bienestar hace referencia al conjunto de aquellas cosas que se necesitan para vivir bien. Dinero para satisfacer las necesidades materiales, salud, tiempo para el ocio y relaciones afectivas sanas son algunas de las cuestiones que hacen al bienestar de una persona.
                Se trata de un concepto subjetividad, que puede tener representaciones muy diferentes en la mente de cada individuo, dado que el bienestar está íntimamente relacionado con las necesidades y los gustos de las personas. Sin embargo, los seres humanos no siempre sabemos qué cosas nos hacen bien, y esto complica aún más la definición de este término.
                </p>
            </div>
            </div>
          </div>
        </div>


      </div>



    );
  }

}

export default Cards;