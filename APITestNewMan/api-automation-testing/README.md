# API Automation Testing with Newman

This project is designed for API automation testing using Newman, the command-line collection runner for Postman. It integrates with GitHub Actions to automate the testing process on specified events.

## Project Structure

```
api-automation-testing
├── collections
│   └── sample-collection.json      # Postman collection defining API requests
├── tests
│   └── sample-test.json             # Newman test scripts for API testing
├── .github
│   └── workflows
│       └── newman-tests.yml         # GitHub Actions workflow for running tests
├── package.json                      # npm configuration file
└── README.md                         # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd api-automation-testing
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run tests locally:**
   You can run the Newman tests locally using the following command:
   ```bash
   npm test
   ```

## GitHub Actions Integration

The project includes a GitHub Actions workflow located in `.github/workflows/newman-tests.yml`. This workflow is triggered on push and pull request events, automatically running the Newman tests to ensure the API is functioning as expected.

## Usage

- Modify the `collections/sample-collection.json` file to define your API requests.
- Update the `tests/sample-test.json` file to specify the tests you want to run against the API requests.
- Use the provided GitHub Actions workflow to automate testing on code changes.

## Contributing

Feel free to submit issues or pull requests to improve the project.