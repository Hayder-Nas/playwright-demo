import { test, expect } from "@playwright/test";

test("My first test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
  const getStarted = page.locator("text=Get Started").first();
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");
  await getStarted.click();
  await expect(page.locator("text=Introduction").first()).toBeVisible();
});
