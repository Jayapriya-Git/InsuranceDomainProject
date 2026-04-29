import { test, expect } from '@playwright/test';

test.describe('Logout functionality', () => {

  test('User can log out successfully', async ({ page }) => {

    await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    // Login
    await page.locator('#email').fill('autotestpriya123@yopmail.com');
    await page.locator('#password').fill('auto123');
    await page.locator('input[value="Log in"]').click();
    
    // Ensure login worked
    const logoutBtn = page.locator('input[value="Log out"]');
    await expect(logoutBtn).toBeVisible();

    // Logout
    await logoutBtn.click();

    // Assertion
    await expect(page.locator('input[value="Log in"]')).toBeVisible();

    // Optional assertion (INSIDE test)
    await expect(page).toHaveURL(/index.php/);
  });

});