import React from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                    <div className="lang">
                        <select name="language" >
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="ml">Malayalam</option>
                            <option value="ta">Tamil</option>
                            <option value="mr">Marathi</option>
                        </select>
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