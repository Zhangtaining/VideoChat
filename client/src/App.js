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
import SignInComponent from './component/SignIn.component';
import SignUpComponent from './component/SignUp.component';
import MainPannel from './component/MainPannel';
import ClassComponent from './component/class.component';
import ClassRoomComponent from './component/classroom.component';

const loggedIn = false;

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>VideoChat</Link>
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
            <Route exact path='/'>
              <div className="auth-inner">
                <SignInComponent />
              </div>
            </Route>
            <Route path="/sign-in">
              <div className="auth-inner">
                <SignInComponent />
              </div>
            </Route>
            <Route path="/sign-up" component={SignUpComponent}>
              <div className="auth-inner">
                <SignUpComponent />
              </div>
            </Route>
            <Route path="/home">
              {!loggedIn ? <Redirect to="/sign-in" /> : <MainPannel /> }
            </Route>
            <Route path="/class">
              {loggedIn ? <Redirect to="/sign-in" /> : <ClassComponent /> }
            </Route>
            <Route path="/classroom/:RoomID">
              <ClassRoomComponent />
            </Route>
          </Switch>
      </div>
    </div></Router>);
}

export default App;
