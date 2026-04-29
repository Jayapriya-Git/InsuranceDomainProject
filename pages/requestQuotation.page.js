class RequestQuotationPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.requestQuoteTab = page.getByRole('link', { name: 'Request Quotation' });
    this.breakdownCover = page.locator('#quotation_breakdowncover');
    this.windscreenYes = page.locator('#quotation_windscreenrepair_t');
    this.windscreenNo = page.locator('#quotation_windscreenrepair_f');

    this.incidents = page.locator('#quotation_incidents');
    this.registration = page.locator('#quotation_vehicle_attributes_registration');
    this.mileage = page.locator('#quotation_vehicle_attributes_mileage');
    this.value = page.locator('#quotation_vehicle_attributes_value');
    this.parking = page.locator('#quotation_vehicle_attributes_parkinglocation');

    this.calculateBtn = page.getByRole('button', { name: 'Calculate Premium' });
    this.saveBtn = page.getByRole('button', { name: 'Save Quotation' });
    this.resetBtn = page.getByRole('button', { name: 'Reset Form' });
  }

  // Actions
  async navigate() {
    await this.requestQuoteTab.click();
  }

  async selectBreakdown(type) {
    await this.breakdownCover.selectOption(type);
  }

  async selectWindscreen(option) {
    if (option === 'YES') {
      await this.windscreenYes.check();
    } else {
      await this.windscreenNo.check();
    }
  }

  async enterVehicleDetails({ incidents, registration, mileage, value, parking }) {
    await this.incidents.fill(incidents);
    await this.registration.fill(registration);
    await this.mileage.fill(mileage);
    await this.value.fill(value);
    await this.parking.selectOption(parking);
  }

  async calculatePremium() {
    await this.calculateBtn.click();
  }

  async saveQuotation() {
    await this.saveBtn.click();
  }

  async resetForm() {
    await this.resetBtn.click();
  }
}

module.exports = { RequestQuotationPage };


