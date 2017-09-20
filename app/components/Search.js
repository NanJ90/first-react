// Include React

import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
// import Link from "react-router.Link";

import {Link} from "react-router";

class Search extends React.Component{
 // functionational components

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              <p>I'm Search!</p>
              
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default Search;
