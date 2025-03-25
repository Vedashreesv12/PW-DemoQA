import { Page } from '@playwright/test';

export class RadioButtonPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://demoqa.com/radio-button');
    }

    async selectRadioButton(option: string) {
        await this.page.locator(`text=${option}`).click();
    }
}