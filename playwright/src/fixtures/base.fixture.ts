import { mergeTests } from '@playwright/test';
import { test as pageTest } from './page.fixture';
import { test as clientsTest } from './clients.fixture';

export const test = mergeTests(pageTest, clientsTest);

export { expect } from '@playwright/test';