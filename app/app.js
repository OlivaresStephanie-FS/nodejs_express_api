// Import necessary libraries and modules
const express = require("express"); // Import the 'express' library
const starwarsRouter = require("../router/starwarsRouter"); // Import the 'starwarsRouter' module
const app = express(); // Create an Express application

// Define a route for the root URL ("/")
app.get("/", (req, res, next) => {
	// Handle GET requests to the root URL
	// Respond with a status code 200 and a JSON message indicating that the service is up
	res.status(200).json({ message: "Service is up!" });
});

// Define router middleware for the "/starwars" path
app.use("/starwars", starwarsRouter);

// Define middleware to handle errors and bad URL paths
app.use((req, res, next) => {
	// Create a new error with a 404 status code and a message
	const error = new Error("NOT FOUND!!");
	error.status = 404;
	next(error); // Pass the error to the next middleware
});

app.use((error, req, res, next) => {
	// Handle errors and bad URL paths
	// Respond with a status code based on the error status or 500 if no status is set
	res.status(error.status || 500).json({
		error: {
			message: error.message, // Include the error message
			status: error.status, // Include the error status
			method: req.method, // Include the HTTP method used in the request
		},
	});
});

// Export the Express application for external use
module.exports = app;
