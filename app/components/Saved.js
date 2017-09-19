// Include React

import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
// import Link from "react-router.Link";
import {Link} from "react-router";

class Saved extends React.Component{
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
              <p>I'm Saved Articles!</p>
              
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default Saved;
