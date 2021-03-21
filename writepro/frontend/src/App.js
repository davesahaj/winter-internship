import React from 'react';
import './App.css';
import WpNavbar from './components/Navbar/WpNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WpLogin from './domain/Login/WpLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WpDashboardUser from './domain/DashboardUser/WpDashboardUser';

const App = () => {
  return (
        <Router>
          <div>
          <Switch>
            <Route exact path="/">
              <WpLogin />
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
