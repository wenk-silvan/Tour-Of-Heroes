import {$, browser, by, element} from 'protractor';

export class HeroesPage {
  addHero(name) {
    $('app-root my-heroes input').sendKeys(name);
    element.all(by.css('app-root my-heroes button')).get(0).click();
  }

  deleteHero(el) {
    el.element(by.xpath('following-sibling::button')).click();
  }

  getCountOfHeroes() {
    return element.all(by.css('.heroes > li > span:nth-child(2)')).count()
  }

  navigateTo() {
    return browser.get('/heroes');
  }
}
