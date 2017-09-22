// import React from "react";

// import { Router, Route, Switch } from "react-router";

// // // Include the Route component for displaying individual routes
// // var Route = router.Route;

// // // Include the Router component to contain all our Routes
// // // Here where we can pass in some configuration as props
// // var Router = router.Router;

// // Include the hashHistory prop to handle routing client side without a server
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = Router.hashHistory;

// // browserHistory makes for cleaner URLs but can only be used when running a server
// //var browserHistory = router.browserHistory;

// // Include the IndexRoute (catch-all route)
// var IndexRoute = Router.IndexRoute;

import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import Main from "../components/Main";
import Search from "../components/Search";
import Saved from "../components/Saved";



const routes = (

  // The high level component is the Router component
  <Router History={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="Search" component={Search} />
        {/*<Route path="Results" compponrnt={Results}/>*/}
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>

);

export default routes;