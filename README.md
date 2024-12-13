# Playwright Demo Project

This is a simple example to demonstrate how to use [Playwright](https://playwright.dev/) for automated testing.

## Quick Start

### Prerequisites
- Install [Node.js](https://nodejs.org/) (16 or higher).

### Setup

Get started by installing Playwright using npm, yarn or pnpm. Alternatively you can also get started and run your tests using the VS Code Extension.

 ```bash
    npm init playwright@latest 
  ```

### Run Tests
- Run all tests:
  ```bash
  npx playwright test
  ```
- Open browser during test:
  ```bash
  npx playwright test --headed
  ```

### Generate a Test with Codegen
1. Start recording:
   ```bash
   npx playwright codegen "your_url"
   ```
2. Interact with the browser to generate code.
3. Save the code to a file and run it:
   ```bash
   npx playwright test tests/generated.spec.js
   ```

## Learn More
- [Playwright Docs](https://playwright.dev/docs/intro)
