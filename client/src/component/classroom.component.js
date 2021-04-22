import React, { Component } from 'react'
import { initSocketConnection } from '../scripts/connection'

export default class ClassRoomComponent extends Component {
    render() {
        initSocketConnection();
        return (
            <div> 
                <h1>Welcome join the class</h1>
                <div id='video-grid'></div>
            </div>
        )
    }
}