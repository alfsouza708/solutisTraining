import { HomeDashboardModule } from './home-dashboard.module';

describe('HomeDashboardModule', () => {
  let homeDashboardModule: HomeDashboardModule;

  beforeEach(() => {
    homeDashboardModule = new HomeDashboardModule();
  });

  it('should create an instance', () => {
    expect(homeDashboardModule).toBeTruthy();
  });
});
