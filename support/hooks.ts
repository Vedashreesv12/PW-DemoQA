import { BeforeAll, AfterAll, Before, After, setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

// Global variables to persist browser across scenarios
let browser: Browser;
let context: BrowserContext;

export class CustomWorld extends World {
    page!: Page;
}

setWorldConstructor(CustomWorld);

// Launch browser **once** before all tests
BeforeAll(async function () {
    browser = await chromium.launch({ headless: false }); // Change to true for CI/CD
    context = await browser.newContext();
});

// Create a new page before each scenario
Before(async function (this: CustomWorld) {
    this.page = await context.newPage();
});

// Close page after each scenario but **keep browser open**
After(async function (this: CustomWorld) {
    // await this.page?.close();
});

// Close browser after all tests are done
AfterAll(async function () {
    await context?.close();
    await browser?.close();
});
