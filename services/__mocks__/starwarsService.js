// Define a mock function 'starwarsService' to simulate a Star Wars API call
const starwarsService = async () => {
    // Log a message to indicate that the function was called
    console.log("Mocked Starwars");
    
    // Create a mock response object with 'message' and 'result' properties
    const response = {
        data: {
            message: "ok",
            result: [
                {
                    "films": "https://www.swapi.tech/api/films",
                    "people": "https://www.swapi.tech/api/people",
                    "planets": "https://www.swapi.tech/api/planets",
                    "species": "https://www.swapi.tech/api/species",
                    "starships": "https://www.swapi.tech/api/starships",
                    "vehicles": "https://www.swapi.tech/api/vehicles"
                }
            ]
        }
    };
    
    // Return a resolved promise with the mock response
    return Promise.resolve(response);
};

// Define a mock function 'starwarsServiceByCategory' to simulate Star Wars API call by category
const starwarsServiceByCategory = async (category) => {
    // Log a message with the provided category to indicate that the function was called
    console.log(`Mocked Starwars by Category: ${category}`);
    
    // Create a mock response object with 'message' and an empty 'result' array
    const response = {
        data: {
            message: "ok",
            result: []
        }
    };
    
    // Return a resolved promise with the mock response
    return Promise.resolve(response);
};

// Define a mock function 'starwarsServiceById' to simulate Star Wars API call by ID
const starwarsServiceById = async (category, id) => {
    // Log a message with the provided ID to indicate that the function was called
    console.log(`Real Starwars by ID: ${id}`);
    
    // Create a mock response object with 'message' and 'result' properties
    const response = {
        data: {
            message: "ok",
            result: {
                "title": "Example Movie Title",
                "director": "Example Director"
            }
        }
    };
    
    // Return a resolved promise with the mock response
    return Promise.resolve(response);
};

// Export the mock functions to be used in tests
module.exports = {
    starwarsService,
    starwarsServiceByCategory,
    starwarsServiceById,
};
