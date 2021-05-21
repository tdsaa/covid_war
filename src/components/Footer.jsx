import React from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
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