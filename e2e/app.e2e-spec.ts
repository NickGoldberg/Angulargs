import { AngularCLIPage } from './app.po';

describe('angular-cli App', () => {
  let page: AngularCLIPage;

  beforeEach(() => {
    page = new AngularCLIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
