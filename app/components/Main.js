import React, { Component } from "react";

// import Link from "react-router.Link";
import {Link} from "react-router";

import Search from "./Search";
import Saved from "./Saved";
import helpers from "../ultils/helpers";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			query: "",
			results:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.callNYT = this.callNYT.bind(this);
	}
	handleChange(event) {
    	this.setState({ query: event.target.value });
  	}

  // handleButtonClick() {
  //   const newQuote = this.state.inputValue;
  //   API.saveQuote(newQuote).then(this.props.getQuotes);
  //   this.setState({ inputValue: "" });
//   }

callNYT() {
    // console.log("inside callNYT");
    // let searchTerm = document.getElementById("search-term").value
    // this.setState({

    //  // query: searchTerm
    // });
    // console.log("callNYT query", this.state.query);
    helpers.runQuery(this.state.query).then(function(response) {
          // console.log("runquery response", response);
          // console.log("inside helpers", query);
          // getting data of object from NYT 

          this.setState({results:response.data.response.docs});
           // console.log(this.state);
      }.bind(this));
    
  }
 
	render() {
		return (
		<div className="container">
			<div className="jumbotron">
	      		<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
	    	</div>  

    		<div className="row">
      			<div className="col-sm-12">
        			<br/>
     
	        		<div className="panel panel-primary">
	          			<div className="panel-heading">
	            			<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
	          			</div>
		          		<div className="panel-body">           
		            		<form role="form">             
		              			<div className="form-group">
		                			<label For="search">Search Term:</label>
		                			<input type="text" className="form-control" id="query" value={this.state.query} onChange={this.handleChange} required/>
		              			</div>

		              			<div className="form-group">
		                		<label For="pwd">Number of Records to Retrieve:</label>
		                		<select className="form-control" id="num-records-select">
									<option value="1">1</option>
									
									<option value="5" selected>5</option>
									<option value="10">10</option>
								</select>
		              			</div>

		              
				              	<div className="form-group">
				                <label For="start-year">Start Year (Optional):</label>
				                <input type="text" className="form-control" id="start-year"/>
				              	</div>

		             
				              	<div className="form-group">
				                <label For="end-year">End Year (Optional):</label>
				                <input type="text" className="form-control" id="end-year"/>
				              	</div>
					             <Link to="/Search" className="btn btn-default" onClick={this.callNYT}><i className="fa fa-search"></i> Search</Link>

					             <Link to="/Saved"><button className="btn btn-default">Saved Articles</button></Link>

					             <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

		            		</form>
		          		</div>
        			</div>
      			</div>
    		</div>
    		<div className="container">
    		
 			{
 				this.props.children && React.cloneElement(this.props.children, {
              	results: this.state.results
            	})
            }
    		</div>
    	</div>
    	
		);
	}
}
 
export default Main;   
