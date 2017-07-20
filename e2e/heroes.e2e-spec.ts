import { HeroesPage } from './pages/heroes.page';
import {by, element} from 'protractor';

describe('Tour of heroes, heroes page', () => {
  let page: HeroesPage;

  beforeEach(() => {
    page = new HeroesPage();
    page.navigateTo();
  });

  it('should display at least one hero', () => {
    const count = page.getCountOfHeroes();
    expect(count).toBeGreaterThan(0);
  });

  it('should show information about hero', () => {
    const heroElParent = element(by.cssContainingText('span', 'Narco')).element(by.xpath('ancestor::li'));
    expect(heroElParent.getAttribute('class')).not.toMatch('selected');
    expect(element(by.cssContainingText('h2', 'Nacro is my hero')).isPresent()).toBeFalsy();
    heroElParent.click();
    expect(heroElParent.getAttribute('class')).toMatch('selected');
    expect(element(by.cssContainingText('h2', 'NARCO is my hero')).isPresent()).toBeTruthy();
  });

  it('should be able to add a hero', () => {
    const heroEl = element(by.cssContainingText('span', 'Batman'));
    expect(heroEl.isPresent()).toBeFalsy();
    page.addHero('Batman');
    expect(heroEl.isPresent()).toBeTruthy();
  });

  it('should be able to delete a hero', () => {
    const heroEl = element(by.cssContainingText('span', 'Narco'));
    expect(heroEl.isPresent()).toBeTruthy();
    page.deleteHero(heroEl);
    expect(heroEl.isPresent()).toBeFalsy();
  });
});
