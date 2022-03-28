
//the requirements//
require('dotenv').config()

const mailchimp = require("@mailchimp/mailchimp_marketing");

//Requiring express and body parser and initializing the constant "app"
const express = require ("express");
const request = require('request');
const bodyParser = require ("body-parser");
const https = require("https");
const app = express();


//The public folder which holds the CSS
app.use(express.static ("public"));


app.use(bodyParser.urlencoded({extended:true}));

//Sending the signup.html file to the browser as soon as a request is made on localhost:3000

app.get ("/", function (req, res){
  res.sendFile (__dirname + "/signup.html");
});

//Listening on port 3000 and if it goes well then logging a message saying that the server is running

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});


//Setting up MailChimp

//Creating an object with the users data
mailchimp.setConfig({
  apiKey: process.env.API_KEY,
  server: "us6"
});

//As soon as the sign in button is pressed execute this
app.post("/", function (req, res){
  //*****************************CHANGE THIS ACCORDING TO THE VALUES YOU HAVE ENTERED IN THE INPUT ATTRIBUTE IN HTML******************************

        const firstName = req.body.fName;
        const lastName = req.body.lName;
        const email = req.body.email;
        console.log (firstName, lastName , email);
        // const subscribingUser = {
        //   firstName: firstName,
        //   lastName: lastName,
        //   email: email
        // }
        //


    //Uploading the data to the server

    const listId = "8efb5e72ae";//*ENTER YOU LIST ID HERE


    const run = async () => {

    //try/catch is used in an async function to catch any errors that come back.  Like if/else, it can run a different set of instructions based on what comes back.
    try {
        const response = await mailchimp.lists.addListMember(listId, {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName
          }
        });
        console.log(response);

        res.sendFile(__dirname + "/success.html");
      } catch (error) {
        console.log(error.status);
        res.sendFile(__dirname + "/failure.html");
      }
  };


    run();


});


app.post("/failure", function(req,res){
  res.redirect("/");
});
