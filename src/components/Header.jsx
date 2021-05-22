import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link }  from 'react-router-dom'


class Header extends React.Component {
    render(){
        return (
                <header id="header">
                    <div className="d-flex flex-column">
                    <nav className="nav-menu">
                        <ul>
                        <li className="active"><Link to='/'><i className="ion-home"></i> <span>Home</span></Link></li>
                        <li><Link to="/covid"><i className="ion-information-circled"></i> Covid 19</Link></li>
                        <li><Link to="/vaccine"><i className="ion-checkmark-circled"></i>Vaccines</Link></li>
                        <li><Link to="/vaccine-centers"><i className="ion-map"></i>Vaccince Centres</Link></li>
                        <li><Link to="/post-covid-conditions"><i className="ion-heart-broken"></i>Post COVID Conditions</Link></li>
                        <li><Link to="/mental-health"><i className="ion-happy"></i>Mental Health</Link></li>
                        <li><Link to="/faq"><i className="ion-chatboxes"></i>FAQs</Link></li>
                        {/* <li><Link to=""><i className="ion-medkit"></i>Test Centres</Link></li> */}
                        <li><Link to="/twitter"><i className="ion-social-twitter"></i>Twitter Updates</Link></li>
                        {/* <li><Link to=""><i className="ion-connection-bars"></i>Dashboard</Link></li> */}
                        <li><Link to=""><i className="ion-paper-airplane"></i>Latest News</Link></li>
                        <li><Link to="/volunteers"><i className="ion-heart"></i>Volunteering Opportunities</Link></li>
                        <li><Link to="/contact-us"><i className="ion-email"></i>Contact Us</Link></li>
                        </ul>
                    </nav>
                    </div>
        </header>
    );
    }
}

export default Header;