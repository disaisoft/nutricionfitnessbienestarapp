import React, { Component } from 'react';



export class Testimonials extends Component {
    render(){
        return(
        <div className="container shadow p-3 mb-5 bg-white rounded">
                <div className="">
                    <div class="card text-center border border-success bg-success text-white">
                        <div class="card-header border border-success">
                            <h1>Testimonios</h1>
                        </div>
                        <div class="card-body">
                            
                            <h5 class="card-title">He Aquí Algunos Testimonios</h5>
                            <p class="card-text">acá va a ir un video</p>
                            <a href="#" class="btn btn-primary">¡Ver Video!</a><br/>
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Testimonials;