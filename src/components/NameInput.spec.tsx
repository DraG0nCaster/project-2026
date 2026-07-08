import { test, expect } from '@playwright/experimental-ct-react';
import NameInput from './NameInput'; 

test('NameInput correctly updates name', async ({ mount, page }) => {
  let changedName = '';
  
  await mount(
    <NameInput onNameChange={(value) => { changedName = value; }} />
  );

  const input = page.getByPlaceholder('Enter your name');
  
  await input.fill('Test');

  expect(changedName).toBe('Test');
});