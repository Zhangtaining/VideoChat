import React, { Component } from 'react' 

export class Header extends Component {  
    render() {  
        return (
            <header id="header" class="d-flex align-items-center ">
                <div class="container-fluid container-xxl d-flex align-items-center">
                    <div id="logo" class="me-auto">
                        <a href="index.html" class="scrollto"><img src="assets/img/logo.png" alt="" title="" /></a>
                    </div>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link" href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#speakers">Speakers</a></li>
                            <li><a class="nav-link scrollto" href="#schedule">Schedule</a></li>
                            <li><a class="nav-link scrollto" href="#venue">Venue</a></li>
                            <li><a class="nav-link scrollto" href="#hotels">Hotels</a></li>
                            <li><a class="nav-link scrollto" href="#gallery">Gallery</a></li>
                            <li><a class="nav-link scrollto" href="#supporters">Sponsors</a></li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a class="buy-tickets scrollto" href="/sign-in">Log In</a>
                </div>
            </header>
        )
    }
}

export default Header  