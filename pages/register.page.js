// pages/register.page.js
export class RegisterPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('#user_title');
    this.firstName = page.locator('#user_firstname');
    this.lastName = page.locator('#user_surname');
    this.phone = page.locator('#user_phone');

    this.year = page.locator('#user_dateofbirth_1i');
    this.month = page.locator('#user_dateofbirth_2i');
    this.day = page.locator('#user_dateofbirth_3i');

    this.street = page.locator('#user_address_attributes_street');
    this.city = page.locator('#user_address_attributes_city');
    this.county = page.locator('#user_address_attributes_county');
    this.postcode = page.locator('#user_address_attributes_postcode');

    this.email = page.locator('#user_user_detail_attributes_email');
    this.password = page.locator('#user_user_detail_attributes_password');
    this.confirmPassword = page.locator('#user_user_detail_attributes_password_confirmation');

    this.createBtn = page.locator('input[value="Create"]');
  }

  async goto() {
    await this.page.goto('https://demo.guru99.com/insurance/v1/register.php');
  }

 
  async fillPersonalDetails({ firstName, lastName, phone }) {
    if (firstName) await this.firstName.fill(firstName);
    if (lastName) await this.lastName.fill(lastName);
    if (phone) await this.phone.fill(phone);
  }

  async fillCredentials({ email, password, confirmPassword }) {
    if (email) await this.email.fill(email);
    if (password) await this.password.fill(password);
    if (confirmPassword) await this.confirmPassword.fill(confirmPassword);
  }

  async submit() {
    await this.createBtn.click();
  }

  async register(user) {
    await this.fillPersonalDetails(user);
    await this.fillCredentials(user);
    await this.submit();
  }
}