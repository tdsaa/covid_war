import React from 'react';

// Import the content
import home from './../../Content/home';


class Home extends React.Component {
    render() {
        const  { t } = this.props;
        return(   
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container aos-init aos-animate" data-aos="fade-in">
                <h1>{home.heading}</h1>
                <p>{home.subtitle}</p>
                </div>
            </section>
            );
        }
        
    }
    
    export default Home;