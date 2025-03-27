import { expect, Locator, Page } from '@playwright/test';

const ELEMENTS = '//span[contains(text(), "Home")]';
const CHECK_HEADER = '//h1[contains(text(), "Check Box")]';
const EXPAND_ALL = '//button[contains(@title, "Expand all")]';
const COLLAPSE_ALL = '//button[contains(@title, "Collapse all")]';
const NODE_TEXT = '//span[contains(text(), "%PLACEHOLDER%")]';
// const EXPAND_GRANDPARENT= '//span[contains(text(), "Home")]';
// const COLLAPSE_HOME = '//span[contains(text(), "Home")]';
const EXPAND_COLLAPSE_BUTTON = '//label[span[contains(text(), "%PLACEHOLDER%")]]/preceding-sibling::button';



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

    async expandChild() {
        console.log('DemoQA | CheckBox Page | Expanding Child');
        await this.expandCollapseButton('Office', true);
    }

    async collapseParent() {
        console.log('DemoQA | CheckBox Page | Collapse Parent');
        await this.expandCollapseButton('Documents', false);
    }

    async collapseChild() {
        console.log('DemoQA | CheckBox Page | Collapse Child');
        await this.expandCollapseButton('Office', false);
    }

    async expandCollapseButton(buttonName: string, isExpandedExpected: boolean) {
        let expButton = this.page.locator(EXPAND_COLLAPSE_BUTTON.replace('%PLACEHOLDER%', buttonName));
        await expButton.click();
        let isExpanded = await this.isButtonExpandedOrCollapsed(expButton);
        expect(isExpanded).toBe(isExpandedExpected);
    }

    async isButtonExpandedOrCollapsed(buttonLocator: Locator) {
        const isExpanded = (await buttonLocator.locator('svg').getAttribute('class'))?.includes('rct-icon-expand-open');
        console.log(`Is Button is Expanded: ${isExpanded}`);
        return isExpanded;
    }




    // Verify collapse state
    // const isStillExpanded = await this.isButtonExpanded(grandparentButton);
    // console.log(`Veda: Grandparent collapsed? ${!isStillExpanded}`);

    // async collapseGrandparent() {
    //     console.log('DemoQA | CheckBox Page | Collapsing Home');

    //     let collapseHome = this.page.locator();
    //     await collapseHome.click();
    //     await expect(this.page.locator(ELEMENTS)).not.toBeVisible();

    //     console.log('DemoQA | CheckBox Page | Verified Home Collapse');
    // }

    async expandDesktop() { }
    async collapseDesktop() { }
    async expandDocuments() { }
    async collapseDocuments() { }
    async expandOffice() { }
    async collapseOffice() { }

}