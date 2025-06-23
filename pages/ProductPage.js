const { expect } = require('@playwright/test');

class ProductPage {

  constructor(page) {
    this.page = page;
    this.mainCategory = page.locator('.main-category');
    this.mainPrice = page.locator('.x-price-primary');
    this.relatedItems = page.locator('.Mgpb rgAU');
  }

  async navigateToHome() {
    await this.page.goto('https://www.ebay.com/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('#gh-ac', { timeout: 10000 }); 
    await expect(this.page).toHaveTitle(/eBay/);
  }

  async searchProduct(term) {
    await this.page.locator('#gh-ac').fill(term);
    await this.page.locator('#gh-search-btn').click();
  }

async clickFirstProduct() {
  await this.page.waitForTimeout(2000);
  await this.page.waitForSelector('.srp-results .s-item');
  const firstItem = this.page.locator('.srp-results .s-item').first();
  await firstItem.scrollIntoViewIfNeeded();

  const productLink = firstItem.locator('.s-item__image a').first();
  const href = await productLink.getAttribute('href');

  console.log('Product link href:', href);

  if (href) {
    await this.page.goto(href, { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(2000);

    const url = this.page.url();

    console.log('Navigated to product page:', url);
    return url;
  } else {
    throw new Error('No product link found');
  }
}

async gotoProductPage(url) {
    await this.page.goto(url);
    await this.page.waitForSelector('.main-product');
    await this.page.waitForSelector('.related-products');
  }

  async getMainCategory() {
    return (await this.mainCategory.textContent())?.trim();
  }

  async getMainPrice() {
    const priceText = await this.mainPrice.textContent();
    return parseFloat(priceText.replace(/[^0-9.]/g, ''));
  }

async getRelatedCategories() {
    const count = await this.relatedItems.count();
    const categories = [];
    for (let i = 0; i < count; i++) {
      const text = await this.relatedItems.nth(i).locator('.related-category').textContent();
      categories.push(text?.trim());
    }
    return categories;
  }

  async getRelatedPrices() {
    const count = await this.relatedItems.count();
    const prices = [];
    for (let i = 0; i < count; i++) {
      const text = await this.relatedItems.nth(i).locator('.related-price').textContent();
      prices.push(parseFloat(text.replace(/[^0-9.]/g, '')));
    }
    return prices;
  }

  async getRelatedItemsCount() {
    return await this.relatedItems.count();
  }


async isRelatedSectionVisible() {
  try {
    await this.page.waitForLoadState('domcontentloaded');
    const similarItemsHeader = this.page.locator('text=Similar Items');

    return similarItemsHeader !== null;
  } catch (error) {
    console.log('Error checking related section visibility:', error);
    return false;
  }
}

  async getRelatedProductCount() {
  try {
      await this.page.waitForLoadState('domcontentloaded');
      const relatedItems = await page.locator('.related-item');
      const count = await relatedItems.count();


      return count;
    } catch (error) {
      return 0;
    }  
  }
}

module.exports = { ProductPage };
 