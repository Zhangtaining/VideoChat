import React, { Component, /*useRef, useEffect*/ } from 'react'
import { Connection } from '../scripts/connection'
import VideoControlBar from './VideoControlBar.component'

export default class ClassRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enableAudio: true,
            enableVideo: true
        };

        this.onMute = this.onMute.bind(this);
        this.onVideoChange = this.onVideoChange.bind(this);
        this.onShareScreen = this.onShareScreen.bind(this);
        this.myStream = null;
        this.connectionInstance = null;
    }

    getMyOwnVideoStream() {
        navigator.mediaDevices.getUserMedia({
            video: this.state.enableVideo,
            audio: this.state.enableAudio
        }).then(stream => {
            this.myStream = stream
            this.connectionInstance = new Connection(stream);
            this.connectionInstance.setUpConnection();
        });
    }

    onExit(){
        console.log("try to exit room");
        window.close();
    }

    onMute() {
        if (this.myStream) {
            this.myStream.getAudioTracks()[0].enabled = !this.state.enableAudio;
        }
        this.setState({enableAudio: !this.state.enableAudio});
    }

    onShareScreen() {
        return navigator.mediaDevices.getDisplayMedia({
            video: { width: 500, height: 500 },
            audio: false
        }).then(stream => {
            stream.getVideoTracks()[0].onended = () => {
                console.log('click ending screen sharing');
                this.connectionInstance.removeScreenFromAllUsers();
            }
            this.connectionInstance.shareScreenToAllUsers(stream);
        })
    }

    onVideoChange() {
        if (this.myStream) {
            this.myStream.getVideoTracks()[0].enabled = !this.state.enableVideo;
            if (this.state.enableVideo) {
                this.myStream.getVideoTracks()[0].stop()
            }
        }
        this.setState({enableVideo: !this.state.enableVideo});
    }

    render() {
        return (
            <div id="classvideo">
                <div className="videos_container">
                    <div className="container">
                        <div id='room-container' className="row"/>
                    </div>
                </div>
                <VideoControlBar onExit={this.onExit} onMute={this.onMute} onVideoChange={this.onVideoChange} onShareScreen={this.onShareScreen}/>
            </div>
        )
    }

    componentDidMount() {
        this.getMyOwnVideoStream()
    }
}
