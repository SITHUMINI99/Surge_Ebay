const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../pages/ProductPage');


test.describe('eBay Related Products Tests', () => {

  test('Should load a product and check related section visibility', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.navigateToHome();
    await productPage.searchProduct('wallet');
    await productPage.clickFirstProduct();  
    const relatedVisible = await productPage.isRelatedSectionVisible();  
    expect(relatedVisible).toBe(true);
  });


  test('Should show no more than 6 related products', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.navigateToHome();
    await productPage.searchProduct('wallet');
    await productPage.clickFirstProduct();

    const count = await productPage.getRelatedProductCount();
    console.log('Related products count:', count);
    expect(count).toBeLessThanOrEqual(6);
  });


  test('Related products should be in the same category as the main product', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.clickFirstProduct();
    const mainCategory = await productPage.getMainCategory();
    const relatedCategories = await productPage.getRelatedCategories();

    for (const category of relatedCategories) {
      expect(category).toBe(mainCategory);
    }
  });


  test('Related products should be in the same price range as the main product (±20%)', async ({ page }) => {
    const productPage = new ProductPage(page);
    const productUrl=await productPage.clickFirstProduct();
    console.log('Navigated to product URL:', productUrl);

    const mainPrice = await productPage.getMainPrice();
    const relatedPrices = await productPage.getRelatedPrices();

    const min = mainPrice * 0.8;
    const max = mainPrice * 1.2;

    for (const price of relatedPrices) {
      expect(price).toBeGreaterThanOrEqual(min);
      expect(price).toBeLessThanOrEqual(max);
    }
  });

  test('Should show a maximum of 6 related products', async ({ page }) => {
    const productPage = new ProductPage(page);
    const productUrl=await productPage.clickFirstProduct();
    console.log('Navigated to product URL:', productUrl);
    const count = await productPage.getRelatedItemsCount();
    expect(count).toBeLessThanOrEqual(6);
  });

});
 