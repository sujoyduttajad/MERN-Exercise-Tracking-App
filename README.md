This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# MERN-Exercise Tracking App

A React app built with full fledge backend capabilities with Node.js, Express.js, MongoDB, mongoose and many more.
The idea behind this app is that users can log there exercise time and each user can have one account and the users cannot have redundancy.
The schema is simple it is based on the concept that one user can have more than one exercise but the repetition of the same user is not allowed thus every user is unique.

# Front-end
Front-end is primarily based on React.js and for routing purposes used React-Router. It has some unique features like the React-datepicker which gives the UI that amazing calender style date-picker that is usually found in high-end apps. To make it responsive I have used Bootstrap which also gives the bootstrap template look for the UI. 

# Connected both the front-end and the back-end using the Axios library
In a nutshell, Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser that also supports the ES6 Promise API.

# Back-end
Back-end is based on Node.js as the base and on top of it used Express.js to build the server, used the CORS(Cross-Origin Resource Sharing) middleware which basically allows AJAX request to skip the same-origin policy and access resources from remote hosts. The cors package is an express middleware that can enable CORS with different options that are going to make something easily accessible outside of our server from our server.
Apart from that used the dotenv package to secure the connection string and mongoose to connect the backend server to MongoDB.

Also, used Postman for API testing purposes.

# Tech Stack 
* React.js
* Node.js
* Express.js
* MongoDB
* Mongoose
* React-router
* React-datepicker
* Bootstrap 4.5.2
* Axios
* Postman
