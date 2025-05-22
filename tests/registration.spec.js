import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

const RandomUser = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
}

test("Регистрация", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole('textbox', {name: 'Username:'}).fill(RandomUser.name);
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill(RandomUser.password);
  let alertDetected = false;
  let alertMessage = '';

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('Sign up successful.');
    alertDetected = true;
    alertMessage = dialog.message();
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.waitForTimeout(1000);

  expect(alertDetected).toBe(true); // Ошибка здесь
  expect(alertMessage).toBe('Sign up successful.');

});
