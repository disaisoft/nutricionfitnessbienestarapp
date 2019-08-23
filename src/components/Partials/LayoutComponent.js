import React from 'react';

import NavBar from '../Partials/NavBarComponent';
import Footer from '../Partials/FooterComponent';
import HomeComponent from '../HomeComponent/HomeComponent';
import AboutMe from '../AboutMe/AboutMe';
import Start from '../StartComponent/StartComponent';
import Cards from '../CardsComponent/CardsComponent';
import Business from '../TheBusinessComponent/TheBusinessComponent';
import Testimonials from '../TestimonialsComponent/ TestimonialsComponent';
import FinishComponent from '../FinishComponent/FinishComponent';
import Privileges from '../PrivilegesComponent/PrivilegesComponent';

const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             {props.children}
             <HomeComponent/><br/>
             <AboutMe/><br/>
             <Cards/><br/>
             <Start/>
             <Privileges/><br/>
             <Business/><br/>
             <Testimonials/>
               
             
             <br/>
            
            
             
             <FinishComponent/>
            <Footer/>
        </div>
    )
    
}
export default Layout;