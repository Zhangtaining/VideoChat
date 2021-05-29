import React, { Component } from 'react'

export default class ClassScheduleItemComponent extends Component {
    handleJoin() {
        console.log("try to join classroom")
        window.open(`/room/123456`)
        // this.props.history.push(`/classroom`)
    };

    render() {
        return (
            <div class="row schedule-item align-items-cente">
                <div class="col-sm-2"><time>{this.props.startTime}</time></div>
                <div class="col-sm-7">
                    <div class="speaker">
                        <img src={this.props.classImg} alt="Willow Trantow" />
                    </div>
                    <h4>{this.props.className} <span>{this.props.teacherName}</span></h4>
                    <p>{this.props.classBriefDes}</p>
                </div>
                <div class="col-sm-2">
                    <button className="join-class" onClick={this.handleJoin} data-aos="fade-up">Join Class</button>
                </div>
            </div>
        )
    }
}