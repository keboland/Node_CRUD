//Grab out dependencies

const express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;	//Defines port our app is suppossed to use and if it does not exist in enviornmnet variables use port 8080

//Configure Application
//
//
//Set the Routs
app.get('/', (req, res) => 				//ES6 style of defining function
{	
	res.send('Hello I am the App!');
})


//Start our Server
app.listen(port, () => 
{
	console.log(`App listening on http://localhost:${port}`);
});