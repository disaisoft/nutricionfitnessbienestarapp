import React from 'react';
import './styles/PartialStyle.css';
import './styles/FooterStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component {
    render(){

        return(
            <footer class="section footer-classic context-dark bg-dark">   
            <div class="row no-gutters social-container text-center">
              <div class="col"><a class="nav-link" href="https://www.facebook.com/NutricionFitnessBienestar/"><span>Facebook</span></a></div>
              <div class="col"><a class="nav-link" href="https://www.instagram.com/dave.workout/"><span>Instagram</span></a></div>
              <div class="col"><a class="nav-link" href="https://www.instagram.com/dave.workout/"><span>Twitter</span></a></div>
            </div><br />
            
            <div class="text-center">
              <p class="color-footer">&copy; Copyright <strong>David I. López</strong> Todos Los Derechos Reservados</p>
              <div class="credits">
                Diseñado Por <a href="https://davidilopez.netlify.com">David I. López F.</a>
              </div>
            </div>
          </footer>
        );
    
    }
}

export default Footer;