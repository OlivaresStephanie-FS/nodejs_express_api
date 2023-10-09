// Import necessary libraries and modules
const http = require("http"); // Import the 'http' library
const app = require("./app/app"); // Import the Express application from the 'app' module
require("dotenv").config(); // Load environment variables

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Listen on the specified port from the environment variable 'PORT'
server.listen(process.env.PORT, () => {
    // Log a message indicating that the server is running and listening on the specified port
    console.log(`Server running on port: ${process.env.PORT}!`);
});
