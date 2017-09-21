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
  //   this.state = {
  //     ArticleId:"",
  //     title:"",
  //     date:"",
  //     url:""
  //   }
    this.goToDb = this.goToDb.bind(this);
  }
  goToDb(){
    helpers.saveArticle(
      // ArticleId: {this.props.results._id},
      // title: {this.props.results.headline.main},
      // date: Date.now(),
      // url:{this.props.results.web_url
        this.props.results).then(function(err,res)
        {
          if(err){
            return err
          }
          console.log(res);
     });

  }
  // handleButtonClick() {
  //   const newQuote = this.state.inputValue;
  //   API.saveQuote(newQuote).then(this.props.getQuotes);
  //   this.setState({ inputValue: "" });
  // }
  render() {
    // console.log(this.props);
    // console.log({this.goToDb(saved)});
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              {/*<p>I'm Search!</p>*/}
              {/*<div>{this.props.results}</div>*/}
            
              {
                this.props.results.map(function(results, i) {
                  // console.log(results);
                  return (
                  // <p key={results._id}>{results.web_url}</p>
                  <div className="container">
                    <div className = "row">
                      <div className="col-lg-12">
                        <h2><a href={results.web_url} style={styles.fontStyle} key={results._id}>#{i+1} {results.headline.main}</a></h2>
                        {/*<button onClick = {this.goToDb} id="saved">Save</button>*/}
                      </div>
                    </div>
                  </div>
                  
                  )
                })
              
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
