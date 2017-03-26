import React from 'react';


class Header extends React.Component {

    render() {
        return (
            <header className="header-primus-dashboard">
                <nav className="navbar hidden-xs">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand logo-pri__org" href="#"><img alt="img-header" src="./assets/img/logo-primus-gray.png"/></a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav nav-link-page ">
                                <li className="active"><a href="#">Jobs</a></li>

                                <li><a href="#">My Profile</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">
                                        VN
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <a className="" type="button" data-toggle="dropdown">Login as Lanh
                                            <span className="caret"></span></a>
                                        <ul className="dropdown-menu">

                                            <li>
                                                <a href="#">
                                                    <div className="text-icon">
                                                        <i className="material-icons icon">power_settings_new</i>
                                                        <span className="text">
                                                    Log Out
                                                </span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar visible-xs" data-spy="affix" data-offset-top="70">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar icon-bar1"></span>
                                <span className="icon-bar icon-bar2"></span>
                                <span className="icon-bar icon-bar3"></span>
                            </button>
                            <a className="navbar-brand logo-pri__org" href="#"><img alt="img-logo-gray" src="./assets/img/logo-primus-gray.png"/></a>
                            <a className="navbar-brand logo-pri__white" href="#"><img alt="img-logo-white" src="./assets/img/logo-primus-white.png"/></a>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav nav-link-page ">
                                <li><a href="#">Jobs</a></li>
                                <li className="active"><a href="#">My Profile</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">
                                        VN
                                    </a>
                                </li>
                                <li className="visible-xs">
                                    <a href="#">
                                        Log Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
