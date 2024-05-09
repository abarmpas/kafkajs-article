import { Locator, Page } from '@playwright/test';
export class BasePage {
  readonly _url: string = '/';

  constructor(readonly page: Page) {}

  getLocator(
    selector: string,
    options?: { has?: Locator; hasText?: string | RegExp },
  ) {
    return this.page.locator(selector, options);
  }

  async waitForNetwork() {
    await this.page.waitForLoadState('networkidle');
  }

  async open() {
    await this.page.goto(this._url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.waitForNetwork();
  }

  async goToHome() {
    await this.page.locator('#home-page').click({ force: true });
    await this.page.waitForLoadState('domcontentloaded');
    await this.waitForNetwork();
  }

  async reload() {
    await this.page.reload();
    await this.page.waitForLoadState('domcontentloaded');
    await this.waitForNetwork();
  }
}