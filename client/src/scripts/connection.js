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
    peers = {}
    constructor () {
        this.socket = initSocketConnection();
        this.myPeer = initPeerConnection();
    };

    setUpConnection = () => {
        console.log(document);
        this.showMyOwnVideo();

        this.myPeer.on('open', id => {
            this.socket.emit('join-room', 123, id)
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


    addVideoStream = (video, stream) => {
        const videoGrid = document.getElementById('room-container')
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })
        console.log(videoGrid)
        videoGrid.append(video)
    }

    showMyOwnVideo = () => {
        const myVideo = document.createElement('video')
        myVideo.muted = true
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            this.addVideoStream(myVideo, stream)
    
            this.myPeer.on('call', call => {
                call.answer(stream)
                const video = document.createElement('video')
                call.on('stream', userVideoStream => {
                    this.addVideoStream(video, userVideoStream)
                })
            })
    
            this.socket.on('user-connected', userId => {
                console.log('User connected' + userId)
                this.connectToNewUser(userId, stream)
            })
    
            this.socket.on('user-disconnected', userId => {
                if (this.peers[userId]) this.peers[userId].close()
            })
        })
    }
}

export {
    Connection
}