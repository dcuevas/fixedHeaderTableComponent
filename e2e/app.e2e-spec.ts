import { FixedHeaderTablePage } from './app.po';

describe('fixed-header-table App', () => {
  let page: FixedHeaderTablePage;

  beforeEach(() => {
    page = new FixedHeaderTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
