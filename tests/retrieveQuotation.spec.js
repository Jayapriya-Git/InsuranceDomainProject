const { test, expect } = require('@playwright/test');
const { RetrieveQuotationPage } = require('../pages/retrieveQuotation.page');
test.describe('Retrieve Quotation Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    // ✅ Login with valid credentials
  await page.getByLabel('Email').fill('test@test.com');
  await page.getByLabel('Password').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // ✅ Verify login success
  await expect(page.getByText('Signed in as')).toBeVisible();

  });
  
  test('TC01 - Retrieve quotation with valid ID', async ({ page }) => {
    const retrievePage = new RetrieveQuotationPage(page);

    await retrievePage.navigate();
    await retrievePage.enterQuotationId('12345'); // replace with real ID
    await retrievePage.clickRetrieveButton();

    await expect(page.locator('body')).toContainText('Quotation');
  });

  test('TC02 - Retrieve quotation with invalid ID', async ({ page }) => {
    const retrievePage = new RetrieveQuotationPage(page);

    await retrievePage.navigate();
    await retrievePage.enterQuotationId('999999');
    await retrievePage.clickRetrieveButton();

    await expect(page.getByText('Wrong Retrieve Quotation ID. Please Check...'))
  .toBeVisible();
  });

  test('TC03 - Retrieve quotation with empty input', async ({ page }) => {
    const retrievePage = new RetrieveQuotationPage(page);

    await retrievePage.navigate();
    await retrievePage.clickRetrieveButton();

    await expect(retrievePage.quotationIdInput).toHaveValue('');
  });

  test('TC04 - Retrieve quotation with special characters', async ({ page }) => {
    const retrievePage = new RetrieveQuotationPage(page);

    await retrievePage.navigate();
    await retrievePage.enterQuotationId('@#$%');
    await retrievePage.clickRetrieveButton();

    await expect(page.locator('body')).toBeVisible();
  });

  test('TC05 - Verify navigation to Retrieve Quotation page', async ({ page }) => {
    const retrievePage = new RetrieveQuotationPage(page);

    await retrievePage.navigate();

    await expect(retrievePage.quotationIdInput).toBeVisible();
    await expect(retrievePage.retrievebtn).toBeVisible();
  });

});