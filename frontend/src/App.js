import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import DashboardUser from "./containers/DashboardUser/DashboardUser";
import Activate from "./containers/Activate/Activate";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Dashboard from "./containers/admin/Dashboard/Dashboard";
import Features from "./containers/admin/Features/Features";
import Keywords from "./containers/admin/Keywords/Keywords";
import Searchengine from "./containers/admin/Searchengine/Searchengine";
import Searchfilter from "./containers/admin/Searchfilter/Searchfilter";
import Users from "./containers/admin/Users/Users";
import Websites from "./containers/admin/Websites/Websites";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm/ResetPasswordConfirm";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./hocs/Layout";
import UserProfile from "./containers/UserProfile/UserProfile";
import Invitations from "./containers/Invitations/Invitations";
import ArticleView from "./containers/ArticleView/ArticleView";
import ArticleList from "./containers/ArticleList/ArticleList";
import Report from "./containers/Report/Report";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/DashboardUser" component={DashboardUser} />
          <Route exact path="/UserProfile" component={UserProfile} />
          <Route exact path="/Invitations" component={Invitations} />
          <Route exact path="/ArticleView" component={ArticleView} />
          <Route exact path="/ArticleList" component={ArticleList} />
          <Route exact path="/Report" component={Report} />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/features" component={Features} />
          <Route exact path="/admin/keywords" component={Keywords} />
          <Route exact path="/admin/searchengine" component={Searchengine} />
          <Route exact path="/admin/searchfilter" component={Searchfilter} />
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/websites" component={Websites} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
