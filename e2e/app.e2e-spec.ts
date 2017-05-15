import { NgBookYoutubeSearchPage } from './app.po';

describe('ng-book-youtube-search App', function() {
  let page: NgBookYoutubeSearchPage;

  beforeEach(() => {
    page = new NgBookYoutubeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
