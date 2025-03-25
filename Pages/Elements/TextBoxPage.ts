import { expect, Page } from '@playwright/test';

const TEXT_HEADER = '//h1[contains(text(), "Text Box")]';

export class TextBoxPage {
    constructor(private page: Page) {
        this.page = page;
    }

    async isTextBoxPage() {
        try {
            let textHeader = this.page.locator(TEXT_HEADER);
            await expect(textHeader).toHaveText("Text Box");
            console.log('DemoQA | TextBox Page | I am in the Text Box Page');
        } catch (error) {
            console.log('DemoQA | TextBox Page | I am not in the Text Box Page');
        }
    }

    async fillTextBox(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.page.fill('#userName', fullName);
        await this.page.fill('#userEmail', email);
        await this.page.fill('#currentAddress', currentAddress);
        await this.page.fill('#permanentAddress', permanentAddress);
        console.log('DemoQA | TextBox Page | Filled all text boxes');
    }

    async submitForm() {
        await this.page.click('#submit');
        console.log('DemoQA | TextBox Page | Form submitted');
    }

    async verifyFormSubmission(fullName: string, email: string, currentAddress: string, permanentAddress: string) { 
        await expect(this.page.locator('#name')).toContainText(fullName);
        await expect(this.page.locator('#email')).toContainText(email);
        await expect(this.page.locator('p#currentAddress')).toContainText(currentAddress);
        await expect(this.page.locator('p#permanentAddress')).toContainText(permanentAddress);

        console.log('DemoQA | TextBox Page | Verified the form submission');
    }

    async verifyFormSubmissioninDetail(fullName: string, email: string, currentAddress: string, permanentAddress: string) { 
        
        // Name
        let fullNameUI = await this.page.locator('#name').textContent();
        expect(fullNameUI).not.toBeNull(); 
        expect(fullNameUI!.includes(fullName)).toBe(true);
        console.log(`The page contains ${fullNameUI} and passed value is ${fullName}`);

        // Email
        let emailUI = await this.page.locator('#email').textContent();
        expect(emailUI).not.toBeNull(); 
        expect(emailUI!.includes(email)).toBe(true);
        console.log(`The page contains ${emailUI} and passed value is ${email}`);

        // currentAddress
        let currentAddressUI = await this.page.locator('p#currentAddress').textContent();
        expect(currentAddressUI).not.toBeNull(); 
        expect(currentAddressUI!.includes(currentAddress)).toBe(true);
        console.log(`The page contains ${currentAddressUI} and passed value is ${currentAddress}`);

        // permanentAddress
        let permanentAddressUI = await this.page.locator('p#permanentAddress').textContent();
        expect(permanentAddressUI).not.toBeNull(); 
        expect(permanentAddressUI!.includes(permanentAddress)).toBe(true);
        console.log(`The page contains ${permanentAddressUI} and passed value is ${permanentAddress}`);
    }
}
