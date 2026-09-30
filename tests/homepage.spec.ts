import { test, expect } from '@playwright/test';

test.use({ baseURL: 'http://localhost:3000' });

test('hero and intro text displayed', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: "Hi, I'm Senthil!" })).toBeVisible();
  await expect(
    page.getByText('I enjoy solving practical engineering problems that improve performance and reliability.')
  ).toBeVisible();
});

test('experience entries displayed', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Software Developer Intern' }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Data Visualization Engineer' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Software QA Intern' })).toBeVisible();
});

test('projects displayed on homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await expect(page.getByText('Capsule - Event Tracker App')).toBeVisible();
  await expect(page.getByText('Mandelbrot Visualization App')).toBeVisible();
  await expect(page.getByText('Quick Bit Sort - Sorting Algorithm')).toBeVisible();
  await expect(page.getByText('Smart Water - Automated Watering System')).toBeVisible();
  await expect(page.getByText('Organic Chemistry Reaction Simulator')).toBeVisible();
});

test('navigation between home and blog works', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page.getByRole('heading', { name: 'Data Visualization & Engineering' })).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: 'Back to Home' }).click();
  await expect(page.getByRole('heading', { name: "Hi, I'm Senthil!" })).toBeVisible({ timeout: 5000 });
});
