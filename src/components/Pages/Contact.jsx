import React from 'react'

import contact from '../../Content/contact'

class Contact extends React.Component {
    render() {
        return(
        <main id="main">
            <section class="about" id="myth">
                <div class="container">
                
                    <div class="section-title">
                    <h2>Contact us</h2>
                    </div>
                    <div class="row content">
                            <div class="col-md-6">
                                <div class="title-box-2 pt-4 pt-md-0">
                                    <h5 class="title-left">Get in Touch</h5>
                                </div>
                                <div class="more-info">
                                    <p class="lead">Free feel to contact us</p>
                                    <ul class="list-ico">
                                        { 
                                        contact.modes.map(mode=>(
                                            <li id={mode.id} ><i className={mode.icon}></i>{mode.value}</li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="title-box-2 pt-4 pt-md-0">
                                    <h5 class="title-left">Follow Us</h5>
                                </div>
                                <div class="more-info">
                                    <p class="lead">Follow us for latest updates</p>
                                    <div className="socials">
                                    <ul className="list-ico">
                                        {
                                            contact.social_media.map(item=>(
                                                <li><a href={item.detail}><i className={item.icon}></i></a>
                                                </li>
                                            ))
                                        }
                                        
                                    </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </main>
            );
        }
        
    }
    
    export default Contact;