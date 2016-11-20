import { ChatlabPage } from './app.po';

describe('chatlab App', function() {
  let page: ChatlabPage;

  beforeEach(() => {
    page = new ChatlabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
