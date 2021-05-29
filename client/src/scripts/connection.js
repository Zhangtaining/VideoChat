import openSocket from 'socket.io-client'
import Peer from 'peerjs'

function initSocketConnection() {
    return openSocket(
        "http://localhost:5000",
        {
            secure: true, 
            reconnection: true, 
            rejectUnauthorized: false,
            reconnectionAttempts: 10
        }
    )
}

function initPeerConnection() {
    return new Peer(undefined, {
        host: '/',
        port: '3001'
    })
}

class Connection {
    socket;
    myPeer;
    peers = {};
    screenShareCalls = {};
    constructor (myStream) {
        this.socket = initSocketConnection();
        this.myPeer = initPeerConnection();
        this.myStream = myStream
    };

    setUpConnection = () => {
        this.showMyOwnVideo();

        this.myPeer.on('open', id => {
            this.socket.emit('join-room', 123, id)
        })

        this.socket.on('user-disconnected', userId => {
            if (this.peers[userId]) this.peers[userId].close()
        })

        this.myPeer.on('call', call => {
            call.answer(this.myStream);
            const video = document.createElement('video')
            call.on('stream', userVideoStream => {
                this.addVideoStream(video, userVideoStream)
            })
            call.on('close-screen-share', () => {
                console.log("ending screen sharing");
                video.remove();
            })
        })

        this.socket.on('user-connected', userId => {
            this.connectToNewUser(userId, this.myStream)
        })

        this.socket.on('user-disconnected', userId => {
            if (this.peers[userId]) this.peers[userId].close()
        })
    }

    connectToNewUser = (userId, stream) => {
        this.peers[userId] = this.myPeer.call(userId, stream)
        const video = document.createElement('video')
        this.peers[userId].on('stream', userVideoStream => {
            this.addVideoStream(video, userVideoStream)
        })
        this.peers[userId].on('close', () => {
            video.remove()
        })
    }

    shareScreenToAllUsers = (stream) => {
        const screenVideo = document.createElement('video');
        screenVideo.muted = true;
        this.addVideoStream(screenVideo, stream);
        
        for (var user_id in this.peers) {
            this.screenShareCalls[user_id] = this.myPeer.call(user_id, stream);
        }
    }

    removeScreenFromAllUsers = () => {
        for (var user_id in this.screenShareCalls) {
            this.screenShareCalls[user_id].emit('close-screen-share')
        }
    }

    addVideoStream = (video, stream) => {
        const videoGrid = document.getElementById('room-container')
        video.className="col-lg-4 col-md-6"
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })
        stream.getVideoTracks()[0].onended = () => {
            console.log("clear video from screen")
            video.remove();
        }
        videoGrid.append(video)
    }

    showMyOwnVideo = () => {
        const myVideo = document.createElement('video')
        myVideo.muted = true
        this.addVideoStream(myVideo, this.myStream)
    }
}

export {
    Connection
}