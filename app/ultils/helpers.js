// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
// Geocoder API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions for making API Calls
var helpers = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(query) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + query;

    // console.log("runquery helpers", query);
   
    return axios.get(queryURL);
  },

  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  saveArticle: function(saved) {
    console.log(saved);
    return axios.post("/api/saved");
  }
};

// We export the API helper
export default helpers;
