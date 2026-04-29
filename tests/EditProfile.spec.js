import { test, expect } from '@playwright/test';

test('Edit Profile', async ({ page }) => {
  await page.goto('https://demo.guru99.com/insurance/v1/index.php');

    // Login first
     await page.getByLabel('Email').fill('test@test.com');
  await page.getByLabel('Password').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();

    // Navigate to Edit Profile
    await page.getByRole('link', { name: 'Edit Profile' }).click();

    // Edit profile details

    await page.locator('#user_title').selectOption('Mr');
  await page.locator('#user_firstname').click();
    await page.locator('#user_firstname').fill('John');
    await page.locator('#user_surname').click();
    await page.locator('#user_surname').fill('Austin');
    await page.locator('#user_phone').click();
    await page.locator('#user_phone').fill('1234567891');
    await page.locator('#user_dateofbirth_1i').selectOption('1985');
    await page.locator('#user_dateofbirth_2i').selectOption('8');
    await page.locator('#user_dateofbirth_3i').selectOption('30');
    await page.getByLabel('Full').check();
    await page.locator('#user_licenceperiod').selectOption('1');
    await page.locator('#user_occupation_id').selectOption('Doctor');
    await page.locator('#user_address_attributes_street').click();
    await page.locator('#user_address_attributes_street').fill('ABC street');
    await page.locator('#user_address_attributes_city').click();
    await page.locator('#user_address_attributes_city').fill('City');
    await page.locator('#user_address_attributes_county').click();
await page.locator('#user_address_attributes_county').fill('County');
await page.locator('#user_address_attributes_postcode').click();
await page.locator('#user_address_attributes_postcode').fill('12345');

await page.getByRole('button', { name: 'Update User' }).click();
await page.waitForTimeout(5000);


});

   





