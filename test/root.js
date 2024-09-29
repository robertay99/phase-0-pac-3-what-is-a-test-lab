global.expect = require('expect');

const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');

// Set up jsdom before all tests
describe('DOM Tests', function () {
  this.timeout(10000); // Increase the timeout to 10 seconds

  before(function () {
    jsdom({
      src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
    });
  });

  it('should load the DOM and test elements', function () {
    // Your test cases here
    // Example: Test a variable or function from index.js
  });
});
