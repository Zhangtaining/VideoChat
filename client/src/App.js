import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import SignInComponent from './component/SignIn.component';
import SignUpComponent from './component/SignUp.component';
import MainPannel from './component/MainPannel';
import ClassComponent from './component/class.component';
import ClassRoomComponent from './component/classroom.component';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { GC_USER_ID } from './constants';
import Layout from './layout/Layout';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Welcome from './component/Welcome.component';

const { Suspense } = React;

// Define a query
// const AppQuery = graphql`
//   query AppQuery {
//     hello
//   }
// `;

// const preloadQuery = loadQuery(RelayEnvironment, AppQuery, {});


function _isLoggedIn() {
  const user_id = localStorage.getItem(GC_USER_ID);
  return user_id
}

function App() {
  return (<Router>
    <div>  
        <div id="wrapper">   
            <div id="content-wrapper" class="d-flex flex-column">  
                <div id="content">  
                    <Header />  
                    <Switch>
                      <Route exact path='/' component={Welcome}/>
                      <Route path="/sign-in" component={SignInComponent}/>
                      <Route path="/sign-up" >
                        <div className="auth-inner">
                          <SignUpComponent />
                        </div>
                      </Route>
                      <Route path="/home">
                        {!_isLoggedIn() ? <Redirect to="/sign-in" /> : <MainPannel /> }
                      </Route>
                      <Route path="/class">
                        {!_isLoggedIn() ? <Redirect to="/sign-in" /> : <ClassComponent /> }
                      </Route>
                      <Route path="/classroom/:RoomID">
                        <ClassRoomComponent />
                      </Route>
                    </Switch> 
                </div>  
            </div>  
        </div>  
    </div>
</Router>);
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
