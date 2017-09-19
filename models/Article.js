var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  ArticleId:{
  	type:String
  },
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
  	type:String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
