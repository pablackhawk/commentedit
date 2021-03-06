// Require mongoose
const mongoose = require('mongoose');
let Note = require('./Note');
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
let ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  summary: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  saved: {
    type: Boolean,
    default: false,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note',
    },
  ],
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

// Export the model
module.exports = Article;
