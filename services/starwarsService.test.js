// Import the functions we want to test from the 'starwarsService' module
const {
	starwarsService,
	starwarsServiceById,
	starwarsServiceByCategory,
} = require("./starwarsService");

// Mock the entire 'starwarsService' module to replace real functions with mocks
jest.mock("./starwarsService.js");

// Describe a test suite for the 'Star Wars Api Service'
describe("Star Wars Api Service Test", () => {
	// Test case: As a user, I should return the entire API result
	test("As a user I should return the entire API result", async () => {
		// Call the 'starwarsService' function and store its result in 'result'
		const result = await starwarsService();

		// Expectation 1: The 'message' property in the 'data' object should be 'ok'
		expect(result.data).toHaveProperty("message", "ok");

		// Expectation 2: The 'result' property in the 'data' object should exist
		expect(result.data).toHaveProperty("result");

		// Expectation 3: The 'films' property should exist in the 'result' array
		expect(result.data.result[0]).toHaveProperty("films");

		// Similar expectations for other properties (people, planets, species, starships, vehicles)
	});

	// Test case: As a user, I should return Star Wars data by ID
	test("As a user I should return Star Wars data by ID", async () => {
		// Define the category and ID for the request
		const category = "films";
		const id = "1";

		// Call the 'starwarsServiceById' function with the category and ID and store its result in 'result'
		const result = await starwarsServiceById(category, id);

		// Expectation 1: The 'data' object should exist in the result
		expect(result).toHaveProperty("data");

		// Expectation 2: The 'message' property in the 'data' object should be 'ok'
		expect(result.data).toHaveProperty("message", "ok");

		// Expectation 3: The 'result' property in the 'data' object should exist
		expect(result.data).toHaveProperty("result");

		// Similar expectations for other properties
	});

	// Test case: As a user, I should return Star Wars data by category
	test("As a user I should return Star Wars data by category", async () => {
		// Define the category for the request
		const category = "films";

		// Call the 'starwarsServiceByCategory' function with the category and store its result in 'result'
		const result = await starwarsServiceByCategory(category);

		// Expectation 1: The 'data' object should exist in the result
		expect(result).toHaveProperty("data");

		// Expectation 2: The 'message' property in the 'data' object should be 'ok'
		expect(result.data).toHaveProperty("message", "ok");

		// Expectation 3: The 'result' property in the 'data' object should exist
		expect(result.data).toHaveProperty("result");

		// Similar expectations for other properties
	});
});
