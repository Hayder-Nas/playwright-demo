import { test, expect } from "@playwright/test";

test("Look for football", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");
  await page.getByText("Français 2 650 000+ articles").click();
  await page.getByPlaceholder("Rechercher sur Wikipédia").click();
  await page.getByPlaceholder("Rechercher sur Wikipédia").fill("Football");
  await page.getByPlaceholder("Rechercher sur Wikipédia").press("Enter");
  //   await page.getByRole("button", { name: "Rechercher" }).click();
  await expect(page.locator('h1:has-text("Football")')).toBeVisible();
});
