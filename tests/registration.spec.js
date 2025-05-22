// @ts-check
import { test, expect } from '@playwright/test';

test('Регистрация', async ({page})  => {
  await page.goto('https://www.demoblaze.com/');
})