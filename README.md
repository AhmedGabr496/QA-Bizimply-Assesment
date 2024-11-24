# Assesment: Automated Testing of Bzimply using Cypress

This project contains automated tests for the Bzimply Demo website using Cypress.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/AhmedGabr496/Assesment_QA_Cypress_Bzimply.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Assesment_QA_Cypress_Bzimply/
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Cypress:
   ```bash
   npm install cypress --save-dev
   ```

## Running Tests

To open Cypress Test Runner (interactive mode):
```bash
cd Assesment_QA_Cypress_Bzimply
npm run cypress:open
```

To run tests in headless mode:
```bash
cd Assesment_QA_Cypress_Bzimply
npm run cypress:run
```

### Run tests headlessly with report generation
```bash
cd Assesment_QA_Cypress_Bzimply
npm run test:with:report
npm run generate:report
```

This command will:
1. Clean previous reports
2. Run all tests headlessly
3. Generate an HTML report

## Viewing Test Reports

After running the tests with reports, you can find the generated reports in:
- HTML Report: `cypress/reports/mochawesome.html`
- JSON Reports: `cypress/reports/mocha/*.json`

To view the HTML report:
1. Navigate to the `cypress/reports` directory
2. Open `mochawesome.html` with your any web browser

The HTML report includes:
- Overall test summary
- Pass/fail charts
- Detailed test cases with steps
- Screenshots of failures
- Test duration 

## Project Structure

```
cypress-Bzimply-tests/
├── cypress/
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── support/       # Support files and commands
│   └── reports/       # Generated test reports
├── scripts/
|   └── utilsMethods.js  # utilities support methods 
│   └── generateReport.js  # Report generation script
├── cypress.config.js  # Cypress configuration
└── package.json
```

## Test Coverage
The test suite covers the following scenarios:
#### Update your employee personal data. (From Profile- Personal)
#### Create a new time off request (From time off- New request)
#### Create a new unavailability (From unavailability – New request)



##  Scripts to run tests

- `npm run cy:open` - Opens Cypress Test Runner
- `npm run cy:run` - Runs tests headlessly
- `npm run clean:reports` - Cleans previous reports
- `npm run generate:report` - Generates HTML report from JSON results
- `npm run test:with:report` - Runs full test suite with report generation
```   
