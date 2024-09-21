const request = require('supertest'); // Import Supertest
const app = require('../server');       // Import the Express app

// Test suite
describe('GET /', () => {
  it('should respond with Hello from Node.js backend!', async () => {
    const response = await request(app).get('/'); // Make a GET request
    expect(response.status).toBe(200);           // Check status code
    expect(response.text).toBe('Hello from Node.js backend!'); // Check response text
  });
});