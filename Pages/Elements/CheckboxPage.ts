import { expect, Page } from '@playwright/test';

const CHECK_HEADER = '//h1[contains(text(), "Check Box")]';
const EXPAND_ALL = '//button[contains(@title, "Expand all")]';
const COLLAPSE_ALL = '//button[contains(@title, "Collapse all")]';
const NODE_TEXT = '//span[contains(text(), "%PLACEHOLDER%")]';
const EXPAND_HOME = '//span[contains(text(), "Home")]';
const COLLAPSE_HOME = '//span[contains(text(), "Home")]';
const ELEMENTS = '//span[contains(text(), "Home")]';


export class CheckBoxPage {
    constructor(private page: Page) {
        this.page = page;
    }

    async isCheckBoxPage() {
        try {
            let CheckHeader = this.page.locator(CHECK_HEADER);
            await expect(CheckHeader).toHaveText("Check Box");
            console.log('DemoQA | CheckBox Page | I am in the Check Box Page');
        } catch (error) {
            console.log('DemoQA | CheckBox Page | I am not in the Check Box Page');
        }
    }

    async expandAll() {
        console.log('DemoQA | CheckBox Page | Expanded All');

        let expandAll = this.page.locator(EXPAND_ALL);
        await expandAll.click();
        await expect(this.page.locator(NODE_TEXT.replace('%PLACEHOLDER%', 'Notes'))).toBeVisible();
        await expect(this.page.locator(NODE_TEXT.replace('%PLACEHOLDER%', 'Private'))).toBeVisible();

        console.log('DemoQA | CheckBox Page | Verified Expand All');
    }

    async collapseAll() {
        console.log('DemoQA | CheckBox Page | Collapsed All');

        let collapseAll = this.page.locator(COLLAPSE_ALL);
        await collapseAll.click();
        await expect(this.page.locator(NODE_TEXT.replace('%PLACEHOLDER%', 'Notes'))).not.toBeVisible();
        console.log('DemoQA | CheckBox Page | Verified Collapse All');
    }

    async expandHome() {
        console.log('DemoQA | CheckBox Page | Expanding Home');

        let expandHome = this.page.locator(EXPAND_HOME);
        await expandHome.click();
        await expect(this.page.locator(ELEMENTS)).toBeVisible();

        console.log('DemoQA | CheckBox Page | Verified Home Expansion');
    }

    async collapseHome() {
        console.log('DemoQA | CheckBox Page | Collapsing Home');

        let collapseHome = this.page.locator(COLLAPSE_HOME);
        await collapseHome.click();
        await expect(this.page.locator(ELEMENTS)).not.toBeVisible();

        console.log('DemoQA | CheckBox Page | Verified Home Collapse');
    }

    async expandDesktop() { }
    async collapseDesktop() { }
    async expandDocuments() { }
    async collapseDocuments() { }
    async expandOffice() { }
    async collapseOffice() { }

}