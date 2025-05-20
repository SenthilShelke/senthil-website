import { test, expect } from '@playwright/test';

test.use({ baseURL: 'http://localhost:3000' });

test('projects button text displayed', async ({ page }) => {
  await page.goto('https://senthilshelke.netlify.app/');
  await expect(page.getByRole('button', { name: 'Projects' })).toBeVisible();
});

test('description text displayed', async ({page}) => {
  await page.goto('https://senthilshelke.netlify.app/');
  await expect(page.getByText('Hello! My name is Senthil Shelke, and I am a first-year Computer Engineering student at the University of Waterloo. I’m passionate about software development, especially React & React Native. In my spare time, I enjoy building projects, watching TV, and spending time with friends. I’m always eager to learn, grow, and explore entrepreneurial opportunities. Check out my projects below or connect with me through my socials!')).toBeVisible();
})

test('navigation between pages works', async ({ page }) => {
 await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Projects' }).click();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page.getByRole('button', { name: 'Projects' })).toBeVisible({ timeout: 5000 });
});

test('projects displayed on projects page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Projects' }).click();
  await expect(page.getByText('Capsule - Event Tracker App')).toBeVisible();
  await expect(page.getByText('Organic Chemistry Reaction Simulator')).toBeVisible();
  await expect(page.getByText('Smart Water - Automated Plant Watering System')).toBeVisible();
  await expect(page.getByText('Mandelbrot Visualization App')).toBeVisible();
  await expect(page.getByText('Quick Bit Sort - Sorting Algorithm')).toBeVisible();
});

