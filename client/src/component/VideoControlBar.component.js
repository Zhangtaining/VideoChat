import React, { Component } from "react"

export default class VideoControlBar extends Component {
    handleJoin = () => {
        console.log("try to join classroom")
        window.open(`/room/123456`)
        // this.props.history.push(`/classroom`)
    };

    render() {
        return (
            <div id="video-control">
                <div className="align-items-center">
                    <button className="exit-room" onClick={this.props.onMute}>Mute</button>
                    <button className="exit-room" onClick={this.props.onVideoChange}>Cameral Off</button>
                    <button className="exit-room" onClick={this.props.onExit}>Exit Room</button>
                    <button className="exit-room" onClick={this.props.onShareScreen}>Share Screen</button>
                    <button className="exit-room">Record</button>
                </div>
            </div>
        )
        
    }
}

