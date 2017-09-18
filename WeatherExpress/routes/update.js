let express =require('express');
let request =require('request');
let query =require('./../model/schema');
let passport = require('passport');
require('./../config/passport')(passport);

let router = express.Router();

router.use((req,res,next) => {
	 passport.authenticate('jwt',{ session : false})
	 next();
})


router.put('/',(req,res) => {
	query.updateOne({"date" : req.body.date, "city" : req.body.city},{$set : { "description" : req.body.description}}, (err,data) => {
		res.json(data);
	})
})

module.exports =  router;