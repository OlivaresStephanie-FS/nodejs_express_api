// Import necessary libraries and modules
const axios = require("axios"); // Import the 'axios' library
require("dotenv").config(); // Load environment variables

// Define asynchronous functions for Star Wars services

// Function to fetch data from the Star Wars API
const starwarsService = async () => {
    console.log("Real Starwars"); // Log a message to the console
    return await axios.get(`${process.env.api}`); // Send a GET request to the Star Wars API using the 'axios' library
};

// Function to fetch data from the Star Wars API by category
const starwarsServiceByCategory = async (category) => {
    console.log(`Real Starwars by Category: ${category}`); // Log a message to the console with the specified category
    return await axios.get(`${process.env.api}/${category}`); // Send a GET request to the Star Wars API with the specified category
};

// Function to fetch data from the Star Wars API by ID within a category
const starwarsServiceById = async (category, id) => {
    console.log(`Real Starwars by ID: ${id}`); // Log a message to the console with the specified ID
    return await axios.get(`${process.env.api}/${category}/${id}`); // Send a GET request to the Star Wars API with the specified category and ID
};

// Export the functions for external use
module.exports = {
    starwarsService,
    starwarsServiceByCategory,
    starwarsServiceById,
};
