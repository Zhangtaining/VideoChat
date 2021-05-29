import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div id="hero">
                <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 class="mb-4 pb-0">Learning<br /><span>Sharing</span><br /> Growing</h1>
                    <p class="mb-4 pb-0">Let's share knowledge around the world</p>
                    <a href="/sign-in" class="about-btn scrollto">Join Now</a>
                </div>
            </div>
        );
    }
}

export default Welcome