const axios = require("axios");
require("dotenv").config();

const starwarsService = async () => {
    try {
        console.log("Real Starwars");
        const response = await axios.get(`${process.env.api}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from the Star Wars API:", error);
        throw error;
    }
};

const starwarsServiceByCategory = async (category) => {
    console.log(`Real Starwars by Category: ${category}`);
    return await axios.get(`${process.env.api}/${category}`);
};

const starwarsServiceById = async (category, id) => {
    console.log(`Real Starwars by ID: ${id}`);
    return await axios.get(`${process.env.api}/${category}/${id}`);
};

module.exports = {
    starwarsService,
    starwarsServiceByCategory,
    starwarsServiceById,
};
