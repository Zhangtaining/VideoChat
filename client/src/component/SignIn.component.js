import React, { Component } from 'react'
import { commitUserLoginMutation } from '../mutations/UserLoginMutation'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import RelayEnvironment from '../RelayEnvironment';

export default class SignInComponent extends Component {
    _confirm = async () => {
        commitUserLoginMutation(
            RelayEnvironment,
            'test@test.com',
            '12345678',
            (token, userid) => {
                this._saveUserData(userid, token);
                this.props.history.push('/home')
            }
        );
    };

    _saveUserData = (id, token) => {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
    }

    render() {
        return (
            <div id="hero">
                <div className="auth-inner">
                    <h1 className="mb-4 pb-0">Sign In</h1>

                    <div className="form-group">
                        <br />
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <br />
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <br />
                    <button class="log-in" onClick={() => this._confirm()}>Log In</button>
                </div>
            </div>
        );
    }
}