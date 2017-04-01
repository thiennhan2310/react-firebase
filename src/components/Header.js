import React from 'react';
import {hasClass , removeClass} from './../shared/actionClass';
import  NotificationMessage from './NotificationMessage'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.backMegsList = this.backMegsList.bind(this);
        // this.removeClass = this.removeClass.bind(this);
        // this.hasClass = this.hasClass.bind(this);

    }
    backMegsList(){
        var box_right = document.getElementById("primus-chat-system__box-right");
        var header_back_mesgs = document.getElementById("header-primus-dashboard");
        removeClass(box_right, "active");
        removeClass(header_back_mesgs, "active-chat");

    }

    render() {
        return (
            <header className="header-primus-dashboard" id="header-primus-dashboard">
                <nav className="navbar hidden-xs">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand logo-pri__org" href="#"><img alt="img-header"
                                                                                    src="./assets/img/logo-primus-gray.png"/></a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav nav-link-page ">
                                <li className="active"><a href="#">Jobs</a></li>

                                <li><a href="#">My Profile</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">
                                        <NotificationMessage />
                                    </a>
                                </li>
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
                            <a className="navbar-brand logo-pri__org" href="#"><img alt="img-logo-gray"
                                                                                    src="./assets/img/logo-primus-gray.png"/></a>
                            <h5 className="back-channel-list" onClick={() => this.backMegsList()}>
                                <i className="fa fa-angle-left" aria-hidden="true"></i> Messages
                            </h5>
                            <a className="navbar-brand logo-pri__white" href="#"><img alt="img-logo-white"
                                                                                      src="./assets/img/logo-primus-white.png"/></a>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav nav-link-page ">
                                <li><a href="#">Jobs</a></li>
                                <li className="active"><a href="#">My Profile</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">
                                        1
                                    </a>
                                </li>
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
