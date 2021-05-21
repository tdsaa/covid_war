import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link }  from 'react-router-dom'


class Header extends React.Component {
    render(){
        return (
                <header id="header">
                <Router>
                    <div className="d-flex flex-column">
                    <nav className="nav-menu">
                        <ul>
                        <li className="active"><Link to='/'><i className="ion-home"></i> <span>Home</span></Link></li>
                        <li><Link to="/covid"><i className="ion-information-circled"></i> Covid 19</Link></li>
                        <li><Link to="/vaccine"><i className="ion-checkmark-circled"></i>Vaccines</Link></li>
                        <li><Link to="/vaccine-centers"><i className="ion-map"></i>Vaccince Centres</Link></li>
                        <li><Link to=""><i className="ion-chatboxes"></i>FAQs</Link></li>
                        <li><Link to=""><i className="ion-medkit"></i>Test Centres</Link></li>
                        <li><Link to=""><i className="ion-social-twitter"></i>Twitter Updates</Link></li>
                        <li><Link to=""><i className="ion-connection-bars"></i>Dashboard</Link></li>
                        <li><Link to=""><i className="ion-paper-airplane"></i>Lated news</Link></li>
                        <li><Link to=""><i className="ion-heart"></i>Volunteering Opportunities</Link></li>
                        </ul>
                    </nav>
                    </div>
                </Router>
        </header>
    );
    }
}

export default Header;