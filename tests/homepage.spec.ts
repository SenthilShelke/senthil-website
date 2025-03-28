import { test, expect } from '@playwright/test';

test('projects button text displayed', async ({ page }) => {
  await page.goto('https://senthilshelke.netlify.app/');
  await expect(page.getByRole('button', { name: 'Projects' })).toBeVisible();
});

test('description text displayed', async ({page}) => {
  await page.goto('https://senthilshelke.netlify.app/');
  await expect(page.getByText('Hello! My name is Senthil Shelke, and I am a first-year Computer Engineering student at the University of Waterloo. I’m passionate about software development, especially React & React Native. In my spare time, I enjoy building projects, watching TV, and spending time with friends. I’m always eager to learn, grow, and explore entrepreneurial opportunities. Check out my projects below or connect with me through my socials!')).toBeVisible();
})
