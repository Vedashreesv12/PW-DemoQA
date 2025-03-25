import { Given, When } from '@cucumber/cucumber';
import { RadioButtonPage } from '../../Pages/Elements/RadioButtonPage';

let radioButtonPage: RadioButtonPage;

Given('I am on the radio button page', async function () {
    radioButtonPage = new RadioButtonPage(this.page);
    await radioButtonPage.navigate();
});

When('I select the {string} radio button', async function (option) {
    await radioButtonPage.selectRadioButton(option);
});