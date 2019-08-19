import React, { Component } from 'react';
import './Styles/CardsComponent.css';


export class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div class="accordion border border-warning " id="accordionExample">
          <div class="card">
            <div class="card-header border border-warning text-center " id="headingOne">
              <h2 class="mb-0 border border-danger">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h4>Nutrición</h4>
                </button>
              </h2>
            </div>

            <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body bg-dark text-white">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header border border-warning text-center" id="headingTwo">
              <h2 class="mb-0 border border-danger">
                <button class="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h4>Fitness</h4>
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse bg-dark text-white" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class="card border border-warning">
            <div class="card-header border border-warning text-center " id="headingThree">
              <h2 class="mb-0 border border-danger">
                <button class="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h4>Bienestar</h4>
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse bg-dark text-white " aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body ">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
          </div>
        </div>


      </div>



    );
  }

}

export default Cards;