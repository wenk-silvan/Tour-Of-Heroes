import {$, browser, by, element} from 'protractor';

export class HeroDetailPage {
  getHeroElement(name) {
    return element(by.cssContainingText('span', name));
  }

  getHeroId() {
    return $('.hero-id').getText();
  }

  getHeroName() {
    return $('hero-detail input').getAttribute('value');
  }

  navigateTo() {
    return browser.get('/detail/12');
  }
}
