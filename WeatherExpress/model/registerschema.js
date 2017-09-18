let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var Main = new Schema({
	username : String,
	password : String,
	phone : Number,
	email : String
},{collection : "user",versionKey : false});

// Main.pre('save',function(done) {
// 	var user = this;
// 		bcrypt.genSalt(10,(err,salt)=> {
// 			if(err) {
// 				done(err);
// 			}
// 			bcrypt.hash(user.password,salt,(err,hash)=> {
// 				if(err) {
// 					done(err);
// 				}
// 				console.log(user.password);
// 				user.password = hash;
// 				done();
// 			})
// 		})
// })

Main.methods.comparePass = function(password,cb) {
if(this.password == password) {
	cb(null,true);
}
else {
	cb(null,false);
}
}

module.exports =  mongoose.model("user",Main);