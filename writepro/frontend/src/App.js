import React from 'react';
import './App.css';
import WpNavbar from './components/Navbar/WpNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WpLogindPrimaryDiv from './domain/Login/LoginPrimaryDiv/WpLoginPrimaryDiv';
import WpLoginSecondaryDiv from './domain/Login/LoginSecondaryDiv/WpLoginSecondaryDiv';
import WpDashboardDiv from './domain/DashboardUser/DashboardUserDiv/WpDashboardDiv';

const App = () => {
  return (
        <Router>
          <div>
          <Switch>
            <Route exact path="/login">
              <WpLogindPrimaryDiv />
            </Route>
            <Route exact path="/login2">
              <WpLoginSecondaryDiv />
            </Route>
            <Route exact path="/dashboard">
              <WpNavbar />
              <WpDashboardDiv />
            </Route>
          </Switch>
          </div>
        </Router>
  )
}

export default App;
