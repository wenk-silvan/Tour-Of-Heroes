import { DashboardPage } from './pages/dashboard.page';

describe('Tour of heroes, dashboard page', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('should display its application title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });

  it('should display two navigation links', () => {
    const links = page.getNavLinks();
    expect(links[0].getText()).toEqual('Dashboard');
    expect(links[1].getText()).toEqual('Heroes');
  });

  it('should find a hero named "Narco"', () => {
    page.fillSearchInput('Narco');
    expect(page.getSearchResult()).toEqual('Narco');
  });
});
