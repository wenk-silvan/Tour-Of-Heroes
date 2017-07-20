import { browser, by, element } from 'protractor';

export class DashboardPage {

  fillSearchInput(text) {
    element(by.id('search-box')).sendKeys(text);
  }

  getNavLinks() {
    return [
      element(by.css('app-root nav a:nth-child(1)')),
      element(by.css('app-root nav a:nth-child(2)'))
    ];
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSearchResult() {
    return element(by.className('search-result')).getText();
  }

  navigateTo() {
    return browser.get('/');
  }
}
