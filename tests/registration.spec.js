import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';

test.describe('Registration - POM Tests', () => {

  test('Valid registration flow', async ({ page }) => {
    const reg = new RegisterPage(page);
    await reg.goto();

    const user = {
      title: 'Mr',
      firstName: 'John',
      lastName: 'Doe',
      phone: '9876543210',
      year: '1995',
      month: '5',
      day: '15',
      street: 'Street 1',
      city: 'Chennai',
      county: 'India',
      postcode: '600001',
      email: `test${Date.now()}@mail.com`,
      password: 'Test1234',
      confirmPassword: 'Test1234'
    };

    await reg.register(user);

  });

  // ❌ Mandatory field validation
  test('Empty form submission shows validation errors', async ({ page }) => {
  const reg = new RegisterPage(page);
  await reg.goto();

  await page.locator('input[value="Create"]').click();

 
});

  // ❌ Invalid email
  test('Invalid email should show error', async ({ page }) => {
    const reg = new RegisterPage(page);
    await reg.goto();

    await reg.fillPersonalDetails({
      firstName: 'John',
      lastName: 'Doe'
    });

    await reg.fillCredentials({
      email: 'invalid-email',
      password: 'Test1234',
      confirmPassword: 'Test1234'
    });

    await reg.submit();

  });

  // ❌ Password mismatch
  test('Password mismatch should show validation error', async ({ page }) => {
    const reg = new RegisterPage(page);
    await reg.goto();

    await reg.fillPersonalDetails({
      firstName: 'John',
      lastName: 'Doe'
    });

    await reg.fillCredentials({
      email: `test${Date.now()}@mail.com`,
      password: 'Test1234',
      confirmPassword: 'WrongPass'
    });

    await reg.submit();


  });

  // ❌ Invalid phone number
  test('Invalid phone number should show error', async ({ page }) => {
    const reg = new RegisterPage(page);
    await reg.goto();

    await reg.fillPersonalDetails({
      firstName: 'John',
      lastName: 'Doe',
      phone: 'abcd123'
    });

    await reg.submit();

    
  });

});