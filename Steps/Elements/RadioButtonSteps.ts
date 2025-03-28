import { Given, When } from '@cucumber/cucumber';
import { RadioButtonPage } from '../../Pages/Elements/RadioButtonPage';

let radioButtonPage: RadioButtonPage;

Given('I am on the RadioButton Page', async function () {
    radioButtonPage = new RadioButtonPage(this.page);
    await radioButtonPage.isRadioButtonPage();
});

When('Select and verify the {string} radio button', async function (option) {
    await radioButtonPage.selectRadioButton(option);
    await radioButtonPage.isRadioButtonSelected(option);
});

