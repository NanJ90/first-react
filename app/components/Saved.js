// Include React

import React from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
// import Link from "react-router.Link";
import {Link} from "react-router";
import helpers from "../ultils/helpers"

class Saved extends React.Component{
  constructor(props) {
    super(props);
    //this.state = {
    //  ArticleId:"",
  //     title:"",
  //     date:"",
  //     url:""
  //   }
    this.handleclick = this.handleclick.bind(this);
  }
   handleclick(res){
    // console.log(res);
    helpers.deleteArticle(res).then(function(data) {
      console.log("sucessfully print out");
    })
  }
  render() {
    console.log(this.props.saved);
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
            
              {
                this.props.saved.map(function(result, i) {
                  // console.log(result);
                  return (
                  // <p key={result._id}>{result.web_url}</p>
                  <div className="container">
                    <div className = "row">
                      <div className="col-lg-12">
                        <h2><a href={result.url} style={styles.fontStyle} key={result.articleId}>#{i+1} {result.title}</a></h2>
                        <button onClick ={() => this.handleclick(result)} className="btn btn-default" key={result.articleId} id={result._id}>Delete</button>
                        
                      </div>
                    </div>
                  </div>
                  
                  )
                }.bind(this))
              
              }
            {/*<button onClick={() => this.handleclick(result)} className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Deleted</button>*/} 
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

export default Saved;
