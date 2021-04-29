import React, { Component } from 'react'
import { commitUserLoginMutation } from '../mutations/UserLoginMutation'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import RelayEnvironment from '../RelayEnvironment';

export default class SignInComponent extends Component {
    _confirm = async () => {
        console.log(">>>>>>>>>>>>>>>>>>>>");
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
            <div className="auth-inner">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={() => this._confirm()}>Submit</button>
            </div>
        );
    }
}