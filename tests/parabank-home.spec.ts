import { test, expect } from '@playwright/test';

test('ParaBank homepage loads', async ({ page }) => {
  await page.goto('/parabank/index.htm');
  await expect(page).toHaveTitle(/ParaBank/);
});
