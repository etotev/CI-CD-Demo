import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['html', { open: 'never' }] 
  ],
  use: {
    trace: 'on-first-retry', 
    screenshot: 'only-on-failure', 
  },
});
