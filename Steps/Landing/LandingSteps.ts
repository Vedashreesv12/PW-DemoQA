import { LandingPage } from "../../Pages/Landing/LandingPage";
import { Given, Then } from "@cucumber/cucumber";

const landingPage = new LandingPage();
let textBoxPage = null;

Given("I want to Open the Landing Page", async function () {
  await landingPage.open();
});

Then("I want to click on Elements Tile", async function () {
  await landingPage.clickElements();
});
  
  Then("I want to click on TextBox Menu", async function () {
    await landingPage.clicktextboxMenu();
  });


Then("I want to Close the Browser", async function () {
  await landingPage.quit();
});
