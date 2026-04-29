class RetrieveQuotationPage {
  constructor(page) {
    this.page = page;

    // Locators
    
    this.retrieveQuoteTab = page.getByRole('link', { name: 'Retrieve Quotation' });

this.quotationIdInput = page.locator("input[placeholder='identification number']");
this.retrievebtn= page.locator('#getquote');

    }
    // Actions
    async navigate() {
        await this.retrieveQuoteTab.click();
    }

    async enterQuotationId(quotationId) {
        await this.quotationIdInput.fill(quotationId);
    }

    async clickRetrieveButton() {
        await this.retrievebtn.click();
    }
}

module.exports = { RetrieveQuotationPage };
