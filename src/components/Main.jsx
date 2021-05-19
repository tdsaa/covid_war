import React from 'react'
import Header from './Header'
import Footer from './Footer'

class MainPage extends React.Component {

    render() {

        return (
            <body data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0">
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <Header></Header>
            <Footer></Footer>
            </body>
        )
    }
}

export default MainPage