import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
// include pages
import Home from './Pages/Home';
import Covid from './Pages/Covid';
import Vaccine from './Pages/Vaccine';
import VaccineCenters from  './Pages/VaccineCenters';
import PostCovid from './Pages/PostCovid';
import MentalHealth from './Pages/MentalHealth';
import Twitter from './Pages/Twitter';
import Contact from './Pages/Contact';
import Volunteers from './Pages/Volunteers';
import Faq from './Pages/Faq';
import DescriptionDocs from './Pages/DescriptionDocs';

class MainPage extends React.Component {

    render() {

        return (
            <body data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0">
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <Router basename="/covid_war">
            <Header></Header>
            <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/covid"  component={Covid} />
                    <Route path="/vaccine"  component={Vaccine} />
                    <Route path="/documents" component={DescriptionDocs} />
                    <Route path="/post-covid-conditions" component={PostCovid} />
                    <Route path="/mental-health" component={MentalHealth} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/volunteers" component={Volunteers} />
                    <Route path="/twitter" component={Twitter} />
                    <Route path="/contact-us" component={Contact} />
            </Switch>
            </Router>
            <Footer></Footer>
            </body>
        )
    }
}

export default MainPage