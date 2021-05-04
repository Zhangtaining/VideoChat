import React, { Component, useRef, useEffect } from 'react'
import { Connection } from '../scripts/connection'

const ClassRoomComponent = (props) => {
    const connectionInstance = useRef(null);    

    useEffect(() => {
        startConnection();
    }, []);

    const startConnection = () => {
        connectionInstance.current = new Connection();
        connectionInstance.current.setUpConnection();
    }

    return (
        <div id="hero">
            <div className="auth-inner">
            <h1>Welcome join the class</h1>
            <div id='room-container'></div>
            </div>
        </div>
    )
}

export default ClassRoomComponent;
