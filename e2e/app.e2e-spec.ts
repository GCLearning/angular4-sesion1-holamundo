import { Angular4Sesion1HolamundoPage } from './app.po';

describe('angular4-sesion1-holamundo App', () => {
  let page: Angular4Sesion1HolamundoPage;

  beforeEach(() => {
    page = new Angular4Sesion1HolamundoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
