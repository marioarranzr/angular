import { SPAPage } from './app.po';

describe('spa App', () => {
  let page: SPAPage;

  beforeEach(() => {
    page = new SPAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
