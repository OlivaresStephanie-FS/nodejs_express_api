// Import necessary libraries and modules
const express = require("express"); // Import the 'express' library
const starwarsRouter = express.Router(); // Create a new Express router called 'starwarsRouter'
const axios = require("axios"); // Import the 'axios' library

require("dotenv").config(); // Load environment variables

// Use the api loaded from the .env file
const api = process.env.api; // Define a constant 'api' with the value from the 'api' environment variable

// Route for fetching a list of all categories (e.g., /starwars)
starwarsRouter.get("/", async (req, res) => {
    try {
        // Handle the root URL ("/") GET request asynchronously
        const response = await axios.get(api);
        // If the request is successful:
        res.status(200).json(response.data); // Respond with a status code 200 and the JSON data from the response
    } catch (error) {
        // If there's an error:
        res.status(500).json({ error: error.message }); // Respond with a status code 500 and an error message in JSON format
    }
});

// Route for fetching items within a specific category (e.g., /starwars/people)
starwarsRouter.get("/:category", async (req, res) => {
    const category = req.params.category; // Extract the 'category' parameter from the request
    const categoryUrl = `${api}/${category}`; // Construct a 'categoryUrl' by combining 'api' and the 'category' parameter

    try {
        // Handle GET requests with a dynamic 'category' parameter ("/:category") asynchronously
        const response = await axios.get(categoryUrl);
        // If the request is successful:
        res.status(200).json(response.data); // Respond with a status code 200 and the JSON data from the response
    } catch (error) {
        // If there's an error:
        res.status(500).json({ error: error.message }); // Respond with a status code 500 and an error message in JSON format
    }
});

// Route for fetching an item by ID within a specific category (e.g., /starwars/people/1)
starwarsRouter.get("/:category/:id", async (req, res) => {
    const category = req.params.category; // Extract the 'category' parameter from the request
    const id = req.params.id; // Extract the 'id' parameter from the request
    const itemUrl = `${api}/${category}/${id}`; // Construct an 'itemUrl' using 'api', 'category', and 'id'

    try {
        // Handle GET requests with dynamic 'category' and 'id' parameters ("/:category/:id") asynchronously
        const response = await axios.get(itemUrl);
        // If the request is successful:
        res.status(200).json(response.data); // Respond with a status code 200 and the JSON data from the response
    } catch (error) {
        // If there's an error:
        res.status(500).json({ error: error.message }); // Respond with a status code 500 and an error message in JSON format
    }
});

module.exports = starwarsRouter;
