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
import { GC_USER_ID } from './constants'

const { Suspense } = React;

// Define a query
const AppQuery = graphql`
  query AppQuery {
    hello
  }
`;

const preloadQuery = loadQuery(RelayEnvironment, AppQuery, {});


function _isLoggedIn() {
  const user_id = localStorage.getItem(GC_USER_ID);
  return user_id
}

function App(props) {
  const data = usePreloadedQuery(AppQuery, props.preloadedQuery);
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>{data.hello}</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
          <Switch>
            <Route exact path='/' component={SignInComponent}/>
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
    </div></Router>);
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
