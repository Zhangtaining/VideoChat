import React, { Component, Suspense } from 'react';  
import Header from './Header'  
import Footer from './Footer'  
import MainBody from './MainBody' 

export class Layout extends Component {
    render() {
        return (
            <div>  
                <div id="wrapper">   
                    <div id="content-wrapper" class="d-flex flex-column">  
                        <div id="content">  
                            <Header />  
                            <MainBody/>  
                        </div>  
                        <Footer />  
                    </div>  
                </div>  
            </div>
        )
    }
}

export default Layout 