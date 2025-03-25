import { Given, When } from '@cucumber/cucumber';
import { CheckboxPage } from '../../Pages/Elements/CheckboxPage';

let checkboxPage: CheckboxPage;

Given('I am on the checkbox page', async function () {
    checkboxPage = new CheckboxPage(this.page);
    await checkboxPage.navigate();
});

When('I expand all checkboxes', async function () {
    await checkboxPage.expandAll();
});

When('I select the {string} checkbox', async function (label) {
    await checkboxPage.selectCheckbox(label);
});