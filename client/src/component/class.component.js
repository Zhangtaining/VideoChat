import React, { Component } from 'react'

export default class ClassComponent extends Component {

    handleJoin = () => {
        console.log("try to join classroom")
        window.open(`/classroom/123456`)
    };

    render() {
        return (
            <div> 
                <h1>Welcome to class</h1>
                <button onClick={this.handleJoin}>Join Class</button>
            </div>
        )
    }
}