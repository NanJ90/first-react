// Include React

import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
// import Link from "react-router.Link";
import {Link} from "react-router";
import helpers from "../ultils/helpers";

class Search extends React.Component{
 // functionational components
  constructor(props) {
    super(props);
    //this.state = {
    //  ArticleId:"",
  //     title:"",
  //     date:"",
  //     url:""
  //   }
    this.goToDb = this.goToDb.bind(this);
  }

  goToDb(res){
 
    // var newArticle = JSON.stringify(res);
       console.log(res);
    helpers.saveArticle(
      // ArticleId: {this.props.results._id},
      // title: {this.props.results.headline.main},
      // date: Date.now(),
      // url:{this.props.results.web_url
       res._id, res.headline.main, res.pub_date, res.web_url).then(function(data) {
          console.log("goToDb then data");
        });

  }
  render() {
    // console.log(this.props);
    // console.log({this.goToDb(saved)});
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              {/*<p>I'm Search!</p>*/}
              {/*<div>{this.props.results}</div>*/}
            
              {
                this.props.results.map(function(result, i) {
                  // console.log(result);
                  return (
                  // <p key={result._id}>{result.web_url}</p>
                  <div className="container">
                    <div className = "row">
                      <div className="col-lg-12">
                        <h2><a href={result.web_url} style={styles.fontStyle} key={result._id}>#{i+1} {result.headline.main}</a></h2>
                        <button onClick ={() => this.goToDb(result)} className="btn btn-default" id="saved">Save</button>
                        
                      </div>
                    </div>
                  </div>
                  
                  )
                }.bind(this))
              
              }
              
            </div>

          </div>
        </div>
      </div>
    );
  }
};

const styles={
  fontStyle:{
    listStyle:"none",
    color:"black"
  }
};

export default Search;
