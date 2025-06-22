🚀 Surge Global | eBay Related Products Automation

Assignment ID: 7305323:0
Automated test suite using Playwright to validate related product logic on eBay.com.

📦 Project Overview

This project ensures that the Related Products section on an eBay product detail page behaves correctly and delivers relevant recommendations. Tests cover UI visibility, category relevance, price range accuracy, and display limits.

🧰 Tech Stack

Framework: Playwright
Language: JavaScript
Test Runner: Playwright Test
Assertions: Playwright built-in expect API

🚀 Getting Started

1️⃣ Install Dependencies - npm install
2️⃣ Run All Tests        - npx playwright test
3️⃣ Run a Specific Test  - npx playwright test tests/relatedProducts.spec.js
4️⃣ Launch Tests with UI (for debugging) - npx playwright test --ui

📁 Folder Structure

.
├── tests/
│   └── relatedProducts.spec.js   # Main test file
├── pages/
│   └── ProductPage.js            # Page Object for product-related actions
├── playwright.config.js          # Test configuration
└── README.md
