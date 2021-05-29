import React, { Component } from 'react'

export default class CreateClass extends Component {
    render() {
        return (<div id="hero">
                <div className="auth-inner">
                    <h1 className="mb-4 pb-0">Create Your Class</h1>

                    <div className="form-group">
                        <br/>
                        <input type="text" className="form-control" placeholder="User Name" />
                    </div>

                    <div className="form-group">
                        <br />
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <br />
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <br />
                        <input type="password" className="form-control" placeholder="Confirm password" />
                    </div>

                    <br />
                    <button class="log-in">Sign Up</button>
                </div>
            </div>)
    }
}