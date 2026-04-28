import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://demo.guru99.com/insurance/v1/index.php');

  await page.locator('#email').fill('test123456789@yopmail.com');
  await page.locator('#password').fill('test123456789');

  await page.locator('input[value="Log in"]').click();


});
