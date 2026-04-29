import { test, expect } from '@playwright/test';
import { RequestQuotationPage } from '../pages/requestQuotation.page';

test.describe('Request Quotation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    // Login (use stable selectors)
    await page.locator('#email').fill('test@test.com');
    await page.locator('#password').fill('test123');
    await page.locator('input[value="Log in"]').click();

    // Ensure login success
    await expect(page).toHaveURL('https://demo.guru99.com/insurance/v1/header.php');
  });

  test('Create quotation successfully', async ({ page }) => {
    const rq = new RequestQuotationPage(page);

    await rq.navigate();

    await rq.selectBreakdown('European');
    await rq.selectWindscreen('YES');

    await rq.enterVehicleDetails({
      incidents: '0',
      registration: 'AB123CD',
      mileage: '6000',
      value: '5000',
      parking: 'Public Place'
    });

    await rq.calculatePremium();

    await expect(
      page.getByRole('heading', { name: 'Request a quotation' })
    ).toBeVisible();
  });

  // ✅ SAVE QUOTATION TEST
  test('Save quotation successfully', async ({ page }) => {
    const rq = new RequestQuotationPage(page);

    await rq.navigate();

    await rq.selectBreakdown('European');
    await rq.selectWindscreen('YES');

    await rq.enterVehicleDetails({
      incidents: '0',
      registration: 'AB123CD',
      mileage: '6000',
      value: '5000',
      parking: 'Public Place'
    });

    await rq.calculatePremium();

    await rq.saveQuotation();

    // Assertion (example: success message or redirect)
    await expect(page).toHaveURL('https://demo.guru99.com/insurance/v1/new_quotation.php');
  });

  // ✅ RESET FORM TEST
  test('Reset form should clear all fields', async ({ page }) => {
    const rq = new RequestQuotationPage(page);

    await rq.navigate();

    await rq.enterVehicleDetails({
      incidents: '2',
      registration: 'TEST123',
      mileage: '10000',
      value: '8000',
      parking: 'Garage'
    });

    await rq.resetForm();

    // Assertions
    await expect(rq.registration).toHaveValue('');
    await expect(rq.mileage).toHaveValue('');
    await expect(rq.value).toHaveValue('');
  });

});