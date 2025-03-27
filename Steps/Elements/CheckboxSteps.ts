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

When('Click on Expand GrandParent and Verify', async function () {
    await checkboxPage.expandGrandParent();
});

When('Click on Expand Parent and Verify', async function () {
    await checkboxPage.expandParent();
});

When('Click on Expand Child and Verify', async function () {
    await checkboxPage.expandChild();
});

When('Click on Collapse Child and Verify', async function () {
    await checkboxPage.collapseChild();
});

When('Click on Collapse Parent and Verify', async function () {
    await checkboxPage.collapseParent();
});
When('Click on Collapse GrandParent and Verify', async function () {
    await checkboxPage.collapseGrandParent();
});
