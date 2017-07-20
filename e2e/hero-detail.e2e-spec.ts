import { HeroDetailPage } from './pages/hero-detail.page';

describe('Tour of heroes, hero-detail page', () => {
  let page: HeroDetailPage;

  beforeEach(() => {
    page = new HeroDetailPage();
    page.navigateTo();
  });

  it('should show identifier of hero', () => {
    expect(page.getHeroId()).toEqual('id: 12');
  });

  it('should show name of hero', () => {
    expect(page.getHeroName()).toEqual('Narco');
  });
});
