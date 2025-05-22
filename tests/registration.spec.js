import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Регистрация", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole('textbox', {name: 'Username'}).fill('Serget');
});
