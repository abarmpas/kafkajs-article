import { BasePage } from './Base.page';
import { UsersTableComponent } from '../../components/tables/usersTable.component';

export class ArticleBasePage extends BasePage {
  usersTable = new UsersTableComponent(this.page);

  async navigateToUserByEmail(email: string) {
    await (
        await this.usersTable.getUserByValue(email, 'email')
    ).click();
  }
}