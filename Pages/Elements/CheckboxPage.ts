import { expect, Locator, Page } from '@playwright/test';

const CHECK_HEADER = '//h1[contains(text(), "Check Box")]';
const NODE_TEXT = '//span[contains(text(), "%PLACEHOLDER%")]';

const EXPAND_ALL = '//button[contains(@title, "Expand all")]';
const COLLAPSE_ALL = '//button[contains(@title, "Collapse all")]';
const EXPAND_COLLAPSE_BUTTON = '//label[span[contains(text(), "%PLACEHOLDER%")]]/preceding-sibling::button';

const CHECKBOX_BUTTON = '//span[contains(text(), "%PLACEHOLDER%")]/preceding-sibling::span[contains(@class, "checkbox")]'


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

    async expandGrandParent() {
        console.log('DemoQA | CheckBox Page | Expanding Grandparent');
        await this.expandCollapseButton('Home', true);
    }

    async collapseGrandParent() {
        console.log('DemoQA | CheckBox Page | Collapsing Grandparent');
        await this.expandCollapseButton('Home', false);
    }

    async expandParent() {
        console.log('DemoQA | CheckBox Page | Expanding Parent');
        await this.expandCollapseButton('Documents', true);
    }

    async collapseParent() {
        console.log('DemoQA | CheckBox Page | Collapse Parent');
        await this.expandCollapseButton('Documents', false);
    }

    async expandChild() {
        console.log('DemoQA | CheckBox Page | Expanding Child');
        await this.expandCollapseButton('Office', true);
    }

    async collapseChild() {
        console.log('DemoQA | CheckBox Page | Collapse Child');
        await this.expandCollapseButton('Office', false);
    }

    async checkGrandParent() {
        console.log('DemoQA | CheckBox Page | Check Grandparent');
        await this.checkUncheckButton('Home', true);
    }

    async uncheckGrandParent() {
        console.log('DemoQA | CheckBox Page | Uncheck Grandparent');
        await this.checkUncheckButton('Home', false);
    }

    async checkParent() {
        console.log('DemoQA | CheckBox Page | Check Parent');
        await this.checkUncheckButton('Documents', true);
    }

    async uncheckParent() {
        console.log('DemoQA | CheckBox Page | Uncheck Parent');
        await this.checkUncheckButton('Documents', false);
    }

    async checkChild() {
        console.log('DemoQA | CheckBox Page | Check Child');
        await this.checkUncheckButton('Office', true);
    }

    async uncheckChild() {
        console.log('DemoQA | CheckBox Page | Uncheck Child');
        await this.checkUncheckButton('Office', false);
    }


    // Helper
    async expandCollapseButton(buttonName: string, isExpandedExpected: boolean) {
        let expButton = this.page.locator(EXPAND_COLLAPSE_BUTTON.replace('%PLACEHOLDER%', buttonName));
        await expButton.click();
        let isExpanded = await this.isButtonExpandedOrCollapsed(expButton);
        expect(isExpanded).toBe(isExpandedExpected);
    }

    // Helper
    async isButtonExpandedOrCollapsed(buttonLocator: Locator) {
        const isExpanded = (await buttonLocator.locator('svg').getAttribute('class'))?.includes('rct-icon-expand-open');
        console.log(`Is Button is Expanded: ${isExpanded}`);
        return isExpanded;
    }

    // Helper
    async checkUncheckButton(buttonName: string, isCheckedExpected: boolean) {
        let expButton = this.page.locator(CHECKBOX_BUTTON.replace('%PLACEHOLDER%', buttonName));
        isCheckedExpected ? await expButton.check() : await expButton.uncheck();
        let isChecked = await this.isButtonChecked(expButton);
        expect(isChecked).toBe(isCheckedExpected);
    }

    // Helper
    async isButtonChecked(buttonLocator: Locator) {
        const isChecked = (await buttonLocator.locator('svg').getAttribute('class'))?.includes('rct-icon-check');
        console.log(`Is Button is Checked: ${isChecked}`);
        return isChecked;
    }
}