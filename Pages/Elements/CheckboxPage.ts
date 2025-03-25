import { Page } from '@playwright/test';

export class CheckboxPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://demoqa.com/checkbox');
    }

    async expandAll() {
        await this.page.click('.rct-option-expand-all');
    }

    async selectCheckbox(label: string) {
        await this.page.locator(`text=${label}`).click();
    }
}