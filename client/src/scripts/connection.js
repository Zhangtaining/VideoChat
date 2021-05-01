import openSocket from 'socket.io-client'
const videoGrid = document.getElementById('video-grid')

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

// const myPeer = new Peer(undefined, {
//     host: '/',
//     port: '3001'
// })

// const myVideo = document.createElement('video')
// myVideo.muted = true
// const peers = {}
// navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true
// }).then(stream => {
//     addVideoStream(myVideo, stream)

//     myPeer.on('call', call => {
//         call.answer(stream)
//         const video = document.createElement('video')
//         call.on('stream', userVideoStream => {
//             addVideoStream(video, userVideoStream)
//         })
//     })

//     socket.on('user-connected', userId => {
//         connectToNewUser(userId, stream)
//     })

//     socket.on('user-disconnected', userId => {
//         if (peers[userId]) peers[userId].close()
//     })
// })

// myPeer.on('open', id => {
//     socket.emit('join-room', ROOM_ID, id)
// })

// function connectToNewUser(userId, stream) {
//     peers[userId] = myPeer.call(userId, stream)
//     const video = document.createElement('video')
//     peers[userId].on('stream', userVideoStream => {
//         addVideoStream(video, userVideoStream)
//     })
//     peers[userId].on('close', () => {
//         video.remove()
//     })

// }


// socket.on('user-connected', userId => {
//     console.log('User connected' + userId)
// })


// function addVideoStream(video, stream) {
//     video.srcObject = stream
//     video.addEventListener('loadedmetadata', () => {
//         video.play()
//     })

//     videoGrid.append(video)
// }

export {
    initSocketConnection
}