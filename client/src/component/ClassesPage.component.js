import React, { Component } from 'react'
import ClassCard from './ClassCard.component'

// todo: replace this to real query
var classes = [
    {
        "class_image_link": "assets/img/speakers/1.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/2.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/3.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/4.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/5.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/6.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/6.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/6.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
    {
        "class_image_link": "assets/img/speakers/6.jpg",
        "speaker_name": "Brenden Legros",
        "class_title": "Quas alias incidunt"
    },
]

export default class ClassesPage extends Component {

    render() {
        return (
            <div id="speakers" className="section-with-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Event Speakers</h2>
                            <p>Here are some of our speakers</p>
                        </div>

                        <div className="row">
                            {classes.map(entry => {
                                return <ClassCard class_image_link={entry.class_image_link} speaker_name={entry.speaker_name} class_title={entry.class_title} />
                            })}
                        </div>
                    </div>

                </div>
        )
    }
}