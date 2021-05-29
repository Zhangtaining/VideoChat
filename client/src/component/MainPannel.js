import React, { Component } from 'react'
import { GC_USER_ID, /*GC_AUTH_TOKEN*/ } from '../constants'

export default class MainPannel extends Component {
    render() {
        //const userId = localStorage.getItem(GC_USER_ID);
        return ( 
            <h1>Hello {localStorage.getItem(GC_USER_ID)}</h1>
        )
    }
}