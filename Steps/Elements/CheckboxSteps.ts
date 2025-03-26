import { Given, Then, When } from '@cucumber/cucumber';
import { CheckBoxPage } from '../../Pages/Elements/CheckboxPage';

let checkboxPage: CheckBoxPage;

Given('I am on the CheckBox Page', async function () {
    checkboxPage = new CheckBoxPage(this.page);
    await checkboxPage.isCheckBoxPage();
});

When('Click on Expand All and Verify', async function () {
    await checkboxPage.expandAll();
});

When('Click on Collapse All and Verify', async function () {
    await checkboxPage.collapseAll();
});

When('Click on Expand Home and Verify', async function () {
    await checkboxPage.expandHome();
});

When('Click on Collapse Home and Verify', async function () {
    await checkboxPage.collapseHome();
});



