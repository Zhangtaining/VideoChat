import './App.css';
import {
  BrowserRouter as Router,
  // Link,
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
import ClassComponent from './component/Class.component';
import ClassesPage from './component/ClassesPage.component';
import ClassRoomComponent from './component/Classroom.component';
// import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { GC_USER_ID } from './constants';
import Header from './layout/Header';
import Welcome from './component/Welcome.component';
import ScheduleComponent from './component/Schedule.component';

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
            <div id="content-wrapper" className="d-flex flex-column">  
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
                        {!_isLoggedIn() ? <Redirect to="/sign-in" /> : <Welcome /> }
                      </Route>
                      <Route path="/myschedule">
                        {!_isLoggedIn() ? <Redirect to="/sign-in" /> : <ScheduleComponent /> }
                      </Route>
                      <Route path="/classes">
                        <ClassesPage />
                      </Route>
                      <Route path="/class" component={ClassComponent} />
                      <Route path="/room/:id" component={ClassRoomComponent} />
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
