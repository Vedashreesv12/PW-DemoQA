import { Page } from '@playwright/test';
import { TextBoxPage } from '../../Pages/Elements/TextBoxPage';
import { Given, When, Then } from '@cucumber/cucumber';


let textBoxPage: TextBoxPage;
let fullName: string;
let email: string;
let currentAddress: string;
let permanentAddress: string;

Given("I should be on the TextBox page", async function () {
    textBoxPage = new TextBoxPage(this.page);
    textBoxPage.isTextBoxPage();
});

When("Fill the TextBox with {string}, {string}, {string}, {string}",
    async function (fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        this.fullName = fullName;
        this.email = email;
        this.currentAddress = currentAddress;
        this.permanentAddress = permanentAddress;

        await textBoxPage.fillTextBox(fullName, email, currentAddress, permanentAddress);
        await textBoxPage.submitForm();
    }
);

Then("Verify the TextBox form got submitted", async function (){
    await textBoxPage.verifyFormSubmission(this.fullName, this.email, this.currentAddress, this.permanentAddress);
});

Then("Verify the TextBox form got submitted in detail", async function (){
    await textBoxPage.verifyFormSubmissioninDetail(this.fullName, this.email, this.currentAddress, this.permanentAddress);
});
