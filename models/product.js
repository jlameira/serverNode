var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;
var connectionString = "http://ec2-54-207-74-206.sa-east-1.compute.amazonaws.com:9200";
// var connectionString = 'localhost:9200';
//var process_env_SEARCHBOX_URL = process.env.SEARCHBOX_URL;

var ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  name: String,
  price: Number,
  image: String
});


ProductSchema.plugin(mongoosastic, {
  hosts: [
    connectionString
  ],
  log: 'debug'
});

module.exports = mongoose.model('Product', ProductSchema);
