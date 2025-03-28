import { expect, Page } from '@playwright/test';

const RADIO_HEADER = '//h1[contains(text(), "Radio Button")]';
const RADIO_BUTTON = '//label[contains(text(), "%PLACEHOLDER%")]/parent::div';


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
    }