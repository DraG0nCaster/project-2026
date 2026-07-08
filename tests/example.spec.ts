import { test, expect } from '@playwright/test';

test('opening the app', async ({ page }) => {
  await page.goto('http://localhost:5173/project-2026/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('writing a name', async ({ page }) => {
  await page.goto('http://localhost:5173/project-2026/');
  await page.getByRole('textbox', { name: 'Enter your name' }).click();
  await page.getByRole('textbox', { name: 'Enter your name' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter your name' }).press('Enter');

  await expect(page.locator('h1')).toHaveText('Hello Test!');
});

test('writing an empty name', async ({ page }) => {
  await page.goto('http://localhost:5173/project-2026/');
  await page.getByRole('textbox', { name: 'Enter your name' }).click();
  await page.getByRole('textbox', { name: 'Enter your name' }).fill('');
  await page.getByRole('textbox', { name: 'Enter your name' }).press('Enter');

  await expect(page.locator('h1')).toHaveText('Hello World!');
});