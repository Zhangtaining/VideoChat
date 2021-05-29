import React, { Component } from 'react'

export default class ClassCard extends Component {


    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="speaker" data-aos="fade-up" data-aos-delay="100">
                    <img src={this.props.class_image_link} alt="Speaker 1" className="img-fluid" />
                    <div className="details">
                        <h3><a href="/class">{this.props.speaker_name}</a></h3>
                        <p>{this.props.class_title}</p>
                        <div className="social">
                            <a href="xxx"><i className="bi bi-twitter"></i></a>
                            <a href="xxx"><i className="bi bi-facebook"></i></a>
                            <a href="xxx"><i className="bi bi-instagram"></i></a>
                            <a href="xxx"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}