import { chromium, Page, Browser } from "playwright";
import { setDefaultTimeout } from "@cucumber/cucumber";

const ELEMENTS_TILE = "//h5[text()='Elements']";
const TEXT_BOX_MENU = "//span[text()='Text Box']";
let browser: Browser | null = null;
setDefaultTimeout(60 * 1000);

export class LandingPage {
  private page: Page | null = null;

  async open() {
    console.log("DemoQA | Landing Page | Page opened");
    if (!browser) {
      browser = await chromium.launch({ headless: false });
    }
    this.page = await browser.newPage();
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

  async getPage(){
    return this.page;
  }

  async clicktextboxMenu() {
    console.log("DemoQA | Landing Page | Click Element Tile | Text Box");

    let textboxTile = this.page!.locator(TEXT_BOX_MENU);
    await textboxTile.click();
  }


  async quit(){
    console.log("DemoQA | Landing Page | Close Browser");

    if(browser){
      await browser.close();
    }
  }
}
