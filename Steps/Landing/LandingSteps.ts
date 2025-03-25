import { LandingPage } from "../../Pages/Landing/LandingPage";
import { Given, Then } from "@cucumber/cucumber";

let landingPage: LandingPage;

Given("Open the Landing Page", async function () {
  landingPage = new LandingPage(this.page);
  await landingPage.open();
});

Then("Click on the Elements Tile", async function () {
  await landingPage.clickElements();
});

Then("Click on the TextBox Menu", async function () {
  await landingPage.clicktextboxMenu();
});

Then("Sleep for {int} seconds", async function (time: number) {
  await this.page.waitForTimeout(time * 1000);
});
