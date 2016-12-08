import { MyUiPage } from './app.po';

describe('my-ui App', function() {
  let page: MyUiPage;

  beforeEach(() => {
    page = new MyUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
