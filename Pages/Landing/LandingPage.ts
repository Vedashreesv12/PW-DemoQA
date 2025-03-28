import { chromium, Page, Browser } from "playwright";
import { setDefaultTimeout } from "@cucumber/cucumber";

const ELEMENTS_TILE = "//h5[text()='Elements']";
const TEXT_BOX_MENU = "//span[text()='Text Box']";
const CHECK_BOX_MENU = "//span[text()='Check Box']";
const RADIO_BUTTON_MENU = "//span[text()='Radio Button']";

setDefaultTimeout(60 * 1000);

export class LandingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    console.log("DemoQA | Landing Page | Page opened");
    await this.page.goto("https://demoqa.com/", { timeout: 60000 });
  }

  async clickElements() {
    console.log("DemoQA | Landing Page | Click Elements Tile");
    if (!this.page) {
      console.log("DemoQA | Landing Page | Page is not initialized");
      await this.open();
    }

    let elementsTile = this.page!.locator(ELEMENTS_TILE);
    await elementsTile.waitFor({ state: "visible", timeout: 5000 });
    await elementsTile.scrollIntoViewIfNeeded();
    await elementsTile.click();

  }

  async clicktextboxMenu() {
    console.log("DemoQA | Landing Page | Click Text Box menu");

    let textboxTile = this.page!.locator(TEXT_BOX_MENU);
    await textboxTile.click();
  }
  
  async clickcheckboxMenu() {
    console.log("DemoQA | Landing Page | Click Checkbox  menu");

    let checkboxTile = this.page!.locator(CHECK_BOX_MENU);
    await checkboxTile.click();
  }
  async clickradiobuttonMenu() {
    console.log("DemoQA | Landing Page | Click RadioButton  menu");

    let radiobuttonTile = this.page!.locator(RADIO_BUTTON_MENU);
    await radiobuttonTile.click();
  }
}
