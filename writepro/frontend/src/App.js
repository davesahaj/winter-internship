import React from 'react';
import './App.css';
import WpNavbar from './components/Navbar/WpNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WpDashboardUser from './domain/DashboardUser/WpDashboardUser';
import WpLogindDiv from './domain/Login/LoginDiv/WpLoginDiv';

const App = () => {
  return (
        <Router>
          <div>
          <Switch>
            <Route exact path="/">
              <WpLogindDiv />
            </Route>
            <Route exact path="/home">
              <WpNavbar />
              <WpDashboardUser />
            </Route>
          </Switch>
          </div>
        </Router>
  )
}

export default App;
