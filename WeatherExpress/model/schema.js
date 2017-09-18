let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Main = new Schema({
	city : String,
	country  : String,
	date : String,
	maximum : Number,
	minimum : Number,
	description : String,
	icon : String
},{collection : "root",versionKey : false});

module.exports =  mongoose.model("root",Main);