# newsletter_signup
A simple newsletter signup that connects Mailchimps API, collecting user data and stored in subscriber list.

# Project Description 
Front-End:
-The newsletter interface utilizes bootstraps framework. 
-The newsletter form contains 3 fields, name, last name and email. All 3 fields must be successfully 
  submitted to which user will be greeted with a feedback page that informs user they have successfully signed up. 
-If user did not fill up all the field or had 
 previously signed up with the same email address, the user will be greeted with failed feedback page. 

Back-End:
-This project reqruires Mailchimp's API, express, body-parser. 
-Set up Mailchimp configurations.
-Route the index page taking in req,res and uploading data into server. 
-Catch any errors , redirect to failure feedback page. 
-Redirect both success page and failure page to index page. 

Deployment
-Install heroku CLI and create heroku app 


