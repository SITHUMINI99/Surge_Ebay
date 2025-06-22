
# eBay Related Products - Playwright Automation (JavaScript)
🚀 Surge Global | eBay Related Products Automation

Assignment ID: 7305323:0
Automated test suite using Playwright to validate related product logic on eBay.com.

📦 Project Overview

This project ensures that the Related Products section on an eBay product detail page behaves correctly and delivers relevant recommendations. Tests cover UI visibility, category relevance, price range accuracy, and display limits.

Automated test suite using Playwright to validate related product display behavior on eBay.com.

## 🛠 Features Tested
- Load product detail page
- Verify related section is visible
- Verify no more than 6 related items shown
- load a product and check related section visibility
- Show no more than 6 related products
- Related products should be in the same category as the main product
- Related products should be in the same price range as the main product (±20%)
- Show a maximum of 6 related products


## 🚀 Run the Tests

```bash
🚀 Getting Started

1️⃣ Install Dependencies - npm install
2️⃣ Run All Tests        - npx playwright test
3️⃣ Run a Specific Test  - npx playwright test tests/relatedProducts.spec.js
4️⃣ Launch Tests with UI (for debugging) - npx playwright test --ui


🧰 Tech Stack

Framework: Playwright
Language: JavaScript
Test Runner: Playwright Test
Assertions: Playwright built-in expect API


📁 Folder Structure

.
├── tests/
│   └── relatedProducts.spec.js   # Main test file
├── pages/
│   └── ProductPage.js            # Page Object for product-related actions
├── playwright.config.js          # Test configuration
└── README.md
