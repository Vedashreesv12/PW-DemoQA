import { expect, Page } from '@playwright/test';

const CHECK_HEADER = '//h1[contains(Text(), "Check Box")]';

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
    }

async collapseAll() {
    }

async expandHome(){}
async collapseHome(){}
async expandDesktop(){}
async collapseDesktop(){}
async expandDocuments(){}
async collapseDocuments(){}
async expandOffice(){}
async collapseOffice(){}

    
    // async fillCheckBox(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    //     await this.page.fill('#userName', fullName);
    //     await this.page.fill('#userEmail', email);
    //     await this.page.fill('#currentAddress', currentAddress);
    //     await this.page.fill('#permanentAddress', permanentAddress);
    //     console.log('DemoQA | CheckBox Page | Filled all Check boxes');
    // }

    // async submitForm() {
    //     await this.page.click('#submit');
    //     console.log('DemoQA | CheckBox Page | Form submitted');
    // }

    // async verifyFormSubmission(fullName: string, email: string, currentAddress: string, permanentAddress: string) { 
    //     await expect(this.page.locator('#name')).toContainCheck(fullName);
    //     await expect(this.page.locator('#email')).toContainCheck(email);
    //     await expect(this.page.locator('p#currentAddress')).toContainCheck(currentAddress);
    //     await expect(this.page.locator('p#permanentAddress')).toContainCheck(permanentAddress);

    //     console.log('DemoQA | CheckBox Page | Verified the form submission');
    // }

    // async verifyFormSubmissioninDetail(fullName: string, email: string, currentAddress: string, permanentAddress: string) { 
        
    //     // Name
    //     let fullNameUI = await this.page.locator('#name').CheckContent();
    //     expect(fullNameUI).not.toBeNull(); 
    //     expect(fullNameUI!.includes(fullName)).toBe(true);
    //     console.log(`The page contains ${fullNameUI} and passed value is ${fullName}`);

    //     // Email
    //     let emailUI = await this.page.locator('#email').CheckContent();
    //     expect(emailUI).not.toBeNull(); 
    //     expect(emailUI!.includes(email)).toBe(true);
    //     console.log(`The page contains ${emailUI} and passed value is ${email}`);

    //     // currentAddress
    //     let currentAddressUI = await this.page.locator('p#currentAddress').CheckContent();
    //     expect(currentAddressUI).not.toBeNull(); 
    //     expect(currentAddressUI!.includes(currentAddress)).toBe(true);
    //     console.log(`The page contains ${currentAddressUI} and passed value is ${currentAddress}`);

    //     // permanentAddress
    //     let permanentAddressUI = await this.page.locator('p#permanentAddress').CheckContent();
    //     expect(permanentAddressUI).not.toBeNull(); 
    //     expect(permanentAddressUI!.includes(permanentAddress)).toBe(true);
    //     console.log(`The page contains ${permanentAddressUI} and passed value is ${permanentAddress}`);
    // }
}
