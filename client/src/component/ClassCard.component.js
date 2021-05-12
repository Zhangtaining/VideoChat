import React, { Component } from 'react'

export default class ClassCard extends Component {


    render() {
        return (
            <div class="col-lg-4 col-md-6">
                <div class="speaker" data-aos="fade-up" data-aos-delay="100">
                    <img src={this.props.class_image_link} alt="Speaker 1" class="img-fluid" />
                    <div class="details">
                        <h3><a href="/class">{this.props.speaker_name}</a></h3>
                        <p>{this.props.class_title}</p>
                        <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}