# FSO: 2.4 Let's Write An API Assignent

## Star Wars API Service

The Star Wars API Service is a Node.js application that provides access to information about the Star Wars universe. It includes functionality to retrieve a list of categories, items within a specific category, and individual items by ID.

## Table of Contents

- [FSO: 2.4 Let's Write An API Assignent](#fso-24-lets-write-an-api-assignent)
  - [Star Wars API Service](#star-wars-api-service)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [API Routes](#api-routes)
  - [Error Handling](#error-handling)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Fetch a list of all available Star Wars categories.
- Retrieve items within a specific Star Wars category.
- Fetch detailed information about a Star Wars item by its ID.
- Error handling for invalid routes and server errors.

## Technologies Used

- Node.js
- Express.js
- Axios
- dotenv (for managing environment variables)

## API Routes

- **GET /starwars:** Fetch a list of all Star Wars categories.
- **GET /starwars/:category:** Fetch items within a specific category.
- **GET /starwars/:category/:id:** Fetch a specific item by its ID within a category.

**Example usage:**

- To get a list of all categories: `GET http://localhost:3000/starwars`
- To get items within the "people" category: `GET http://localhost:3000/starwars/people`
- To get a specific item by ID within the "people" category: `GET http://localhost:3000/starwars/people/1`

## Error Handling

The application includes error handling for invalid routes and server errors. When an error occurs, the API will respond with an appropriate HTTP status code and a JSON error message.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.
