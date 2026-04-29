import { test, expect } from '@playwright/test';

test.describe('Login Scenarios', () => {

  test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.locator('#email').fill('test123456789@yopmail.com');
    await page.locator('#password').fill('test123456789');
    await page.locator('input[value="Log in"]').click();
  });

  test('Login with invalid credentials', async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    await page.locator('#email').fill('wronguser@mail.com');
    await page.locator('#password').fill('wrongpassword');
    await page.locator('input[value="Log in"]').click();
  });


  // Empty fields
  test('Login with empty fields', async ({ page }) => {
    await page.goto('https://demo.guru99.com/insurance/v1/index.php');
  await page.locator('#email').fill('');
  await page.locator('#password').fill('test123456789');

  // Click login
  await page.locator('input[value="Log in"]').click();
  // Assertion: error message should be visible
  await expect(page.locator('text=Enter your Email address and password correct')).toBeVisible();




});

});
