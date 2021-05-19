import React from 'react'

class Footer extends React.Component {
    render() {

        return (
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                    <div className="lang">
                        <a className="active" href="example.com">EN</a>/<a href="example.com">ML</a>
                    </div>
                    © Copyright <a target="_blank" href="https://ctara.iitb.ac.in" rel="noreferrer"></a><strong><span>CTARA</span></strong>
                    </div>
                    <div className="credits">
                    Developed by <a href="www.vishnujayan.in">Vishnu Jayan</a>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;