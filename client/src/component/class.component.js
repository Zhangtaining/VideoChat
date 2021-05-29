import React, { Component } from 'react'

export default class ClassComponent extends Component {

    handleJoin = () => {
        console.log("try to join classroom")
        window.open(`/room/123456`)
        // this.props.history.push(`/classroom`)
    };

    render() {
        return (
            <div id="class-detail" className="section-with-bg">
                <div class="container" data-aos="fade-up">
                    <div className="section-header">
                        <div className="class-img-container">
                            <img src="assets/img/speakers/2.jpg"/>
                        </div>
                        <h4>Quantum Computing <span>Jeff Cao</span></h4>
                        <p>This is a great course to learn about the quatum computing</p>
                    </div>
                    <div className="nav-bar-container">
                        <ul class="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
                            <li class="nav-item">
                                <a class="nav-link" href="#day-1" role="tab" data-bs-toggle="tab">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Class Schedule</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Comments</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}