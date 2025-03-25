import { Given, When } from '@cucumber/cucumber';
import { CheckBoxPage } from '../../Pages/Elements/CheckboxPage';

let checkboxPage: CheckBoxPage;

Given('I am on the CheckBox Page', async function () {
    checkboxPage = new CheckBoxPage(this.page);
    await checkboxPage.isCheckBoxPage();
});


