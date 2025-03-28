import { expect, Page } from '@playwright/test';

const RADIO_HEADER = '//h1[contains(text(), "Radio Button")]';
const RADIO_BUTTON = '//label[contains(text(), "%PLACEHOLDER%")]/parent::div';
const RADIO_SELECTION = "//p[contains(text(), 'You have selected ')]/span[contains(text(), '%PLACEHOLDER%')]";


export class RadioButtonPage {
    constructor(private page: Page) {
        this.page = page;
    }

    async isRadioButtonPage() {
        try {
            let RadioHeader = this.page.locator(RADIO_HEADER);
            await expect(RadioHeader).toHaveText("Radio Button");
            console.log('DemoQA | RadioButton Page | I am in the Radio Button Page');
        } catch (error) {
            console.log('DemoQA | RadioButton Page | I am not in the Radio Button Page');
        }
    }

    async selectRadioButton(option: string) {
        await this.page.locator(RADIO_BUTTON.replace('%PLACEHOLDER%', option)).click();
    }

    async isRadioButtonSelected(option: string) {
        const radioVerification = await this.page.locator(RADIO_SELECTION.replace('%PLACEHOLDER%', option)).textContent();
        expect(radioVerification).toEqual(option);
    }
}