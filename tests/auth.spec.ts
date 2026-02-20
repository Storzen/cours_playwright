import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

test.describe.only("Login UI - AutomationExercise", () => {
  test("login invalide affiche un message d’erreur", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.goto();
    await homePage.openLoginPage();

    await loginPage.login("vianneymougang@gmail.com", "password");

    await expect(loginPage.loginError).toBeVisible();
  });
});
