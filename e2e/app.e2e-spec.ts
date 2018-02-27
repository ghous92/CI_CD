import { CICDAngularPage } from './app.po';

describe('ci-cd-angular App', () => {
  let page: CICDAngularPage;

  beforeEach(() => {
    page = new CICDAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
