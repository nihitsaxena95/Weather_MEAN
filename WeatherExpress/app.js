let express   = require('express');
let logger   = require('morgan');
let body   = require('body-parser');
let mongoose   = require( 'mongoose');
let config   = require('./config/config');
let main   = require('./routes/main');
let index   = require('./routes/index');
let remfav   = require('./routes/remfav');
let update   = require('./routes/update');
let register   = require('./routes/register');
let login   = require('./routes/login');
let passport = require('passport');
require('./config/passport')(passport);


let cors = require('cors');

let app = express();

mongoose.connect(config.url);
mongoose.connection.on("connected", () => {
	console.log("Successfully connected to mongoose");
})
mongoose.connection.on("Error", () => {
	console.log("Error");
})

app.use(cors());
app.use(logger("dev"));
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use('/',index);
app.use('/addfav',main);
app.use('/remfav',remfav);
app.use('/update',update);
app.use('/register',register);
app.use('/login',login);

app.listen(8080, () => {
	console.log("Listening to port 8080");
});
	
module.exports = app;