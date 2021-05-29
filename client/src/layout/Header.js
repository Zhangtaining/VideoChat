import React, { Component } from 'react' 
import { GC_USER_ID } from '../constants';

export class Header extends Component {
    _isLoggedIn() {
        const user_id = localStorage.getItem(GC_USER_ID);
        return user_id
    }

    _getUserInfoNode() {
        if (this._isLoggedIn) {
            return (
                <div className="user">
                    <img src="../assets/img/speakers/2.jpg" alt="Jack Christiansen" />
                </div>
            )
        } else {
            return (
                <a className="buy-tickets" href="/sign-in">Log In</a>
            )
        }
    }

    render() {  
        return (
            <header id="header" className="d-flex align-items-center ">
                <div className="container-fluid container-xxl d-flex align-items-center">
                    <div id="logo" className="me-auto">
                        <a href="index.html"><img src="/assets/img/logo.png" alt="" title="" /></a>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link" href="/">Home</a></li>
                            <li><a className="nav-link" href="/classes">My Classes</a></li>
                            <li><a className="nav-link" href="/myschedule">My Schedule</a></li>
                            <li><a className="nav-link" href="/myprofile">My Profile</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {this._getUserInfoNode()}
                </div>
            </header>
        )
    }
}

export default Header  