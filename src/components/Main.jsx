import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
// include pages
import Home from './Pages/Home';
import Covid from './Pages/Covid';
import Vaccine from './Pages/Vaccine';
import VaccineCenters from  './Pages/VaccineCenters';

class MainPage extends React.Component {

    render() {

        return (
            <body data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0">
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <Header></Header>
            <Router>
            <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/covid"  component={Covid} />
                    <Route path="/vaccine"  component={Vaccine} />
                    <Route path="/vaccine-centers" component={VaccineCenters} />
            </Switch>
            </Router>
            <Footer></Footer>
            </body>
        )
    }
}

export default MainPage