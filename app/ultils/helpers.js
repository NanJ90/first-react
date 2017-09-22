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
  saveArticle: function(id,title,date,url) {
  console.log(id,title,date,url);
    var newArticle = {
      articleId: id,
      title: title,
      date:date,
      url:url
    };
    // console.log(article);
    return axios.post("/api/saved", JSON.stringify(newArticle))
      .then(function(results) {
        console.log("axios post");
          // return results._id;
      // })
    });
  }
}

// We export the API helper
export default helpers;
