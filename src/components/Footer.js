import React from 'react';


class Footer extends React.Component {

    render() {
        return (
            <footer className="footer-primus footer-primus-style2">
                <div className="footer-primus__content container">
                    <div className="footer-primus__content-logo-vnw">
                        <span>A service of </span>
                        <img alt="img-footer" src="./assets/img/logo-footer-vnw-gray.png"/>
                    </div>
                    <div className="footer-primus__content-company">
                        @ Navigos Group Vietnam Joint stock Company
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;