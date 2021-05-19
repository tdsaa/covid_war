import React from 'react'

class Header extends React.Component {
    render(){
        return (
                <header id="header">
            <div className="d-flex flex-column">
            <nav className="nav-menu">
                <ul>
                <li className="active"><a href="#hero"><i className="fa fa-home"></i> <span>Home</span></a></li>
                <li className="active"><a href="#myth"><i className="bx bx-conversation"></i> <span>Myths &amp; Facts</span></a></li>
                <li className=""><a href="#symptoms"><i className="bx bx-plus-medical"></i> <span>Symptoms</span></a></li>
                <li><a href="#transmission"><i className="bx bx-book-content"></i> Mode of Transimission</a></li>
                <li><a href="#prevent"><i className="bx bx-donate-blood"></i>Precautions</a></li>
                <li><a href="#test"><i className="bx bx-test-tube"></i>Test Centres</a></li>
                <li><a href="#resoures"><i className="bx bx-movie"></i>Resources</a></li>
                <li><a href="#twitter"><i className="bx bx-share-alt"></i>Twitter Updates</a></li>
                <li><a href="#dashborad"><i className="bx bx-line-chart"></i>Dashboard</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
    }
}

export default Header;