import React, { Component } from "react";

// import Link from "react-router.Link";
import {Link} from "react-router";


class Main extends Component {
	
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
		                			<label for="search">Search Term:</label>
		                			<input type="text" className="form-control" id="search-term"/>
		              			</div>

		              			<div className="form-group">
		                		<label for="pwd">Number of Records to Retrieve:</label>
		                		<select className="form-control" id="num-records-select">
									<option value="1">1</option>
									
									<option value="5" selected>5</option>
									<option value="10">10</option>
								</select>
		              			</div>

		              
				              	<div className="form-group">
				                <label for="start-year">Start Year (Optional):</label>
				                <input type="text" className="form-control" id="start-year"/>
				              	</div>

		             
				              	<div className="form-group">
				                <label for="end-year">End Year (Optional):</label>
				                <input type="text" className="form-control" id="end-year"/>
				              	</div>

					             <Link to="/Search"><button className="btn btn-default"><i className="fa fa-search"></i> Search</button></Link>
					             <Link to="/Saved"><button className="btn btn-default">Saved Articles</button></Link>

					             <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

		            		</form>
		          		</div>
        			</div>
      			</div>
    		</div>
    		<div className="row">
    			{this.props.children}
    		</div>
    	</div>
    	
		);
	}
}
 
export default Main;   
