import { test, expect } from '@playwright/test';

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('/parabank/index.htm');

  await page.fill('input[name="username"]', 'shamatest01');
  await page.fill('input[name="password"]', 'Test@1234');
  await page.click('input[value="Log In"]');

  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
});
