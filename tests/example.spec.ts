import { test, expect } from '@playwright/test';
import { PlakateSelberBuchenUndGestalte } from '../pages/PlakatPage';

let plakatPage: PlakateSelberBuchenUndGestalte;

test.beforeEach(async ({ page }) => {
  plakatPage = new PlakateSelberBuchenUndGestalte(page);
  await plakatPage.goto();

});


test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Plakate selber buchen und gestalten | plakat.ch');
});

test('suchen and buchen visivble', async ({page}) => {
  // Expect a title "to contain" a substring.
  await expect(plakatPage.menu.suchenBuchenLink).toBeVisible();
  await expect(plakatPage.menu.suchenBuchenLink).toHaveText('Suchen & Buchen');
});

test('technischeSpezifikationenLink visivble', async ({page}) => {
  // Expect a title "to contain" a substring.
  await expect(plakatPage.menu.technischeSpezifikationenLink).toBeVisible();
  await expect(plakatPage.menu.technischeSpezifikationenLink).toHaveText('Technische Spezifikationen');
});

test('Produktion visivble', async ({page}) => {
  // Expect a title "to contain" a substring.
  await expect(plakatPage.menu.produktionLink).toBeVisible();
  await expect(plakatPage.menu.produktionLink).toHaveText('Produktion');
});