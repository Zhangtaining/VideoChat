import React, { Component } from 'react'
import { commitUserLoginMutation } from '../mutations/UserLoginMutation'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import RelayEnvironment from '../RelayEnvironment';

export default class SignInComponent extends Component {
    _confirm = async () => {
        const user_name_text = document.getElementsByName("user_name")[0].value
        const password_text = document.getElementsByName("password")[0].value
        commitUserLoginMutation(
            RelayEnvironment,
            user_name_text,
            password_text,
            (token, userid) => {
                this._saveUserData(userid, token);
                console.log("???????????????????");
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
                        <input name="user_name" type="text" className="form-control" placeholder="Enter user name" />
                    </div>

                    <div className="form-group">
                        <br />
                        <input name="password" type="text" className="form-control" placeholder="Enter password" />
                    </div>
                    <br />
                    <button className="log-in" onClick={() => this._confirm()}>Log In</button>
                </div>
            </div>
        );
    }
}