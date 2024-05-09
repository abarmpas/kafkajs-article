import { test as base } from '@playwright/test';
import { ArticleBasePage } from '../pages/base/ArticleBase.page';

type PageFixtures = {
  basePage: ArticleBasePage;
};

export const test = base.extend<PageFixtures>({
  basePage: async ({ page }, use) => {
    await use(new ArticleBasePage(page));
  },
});