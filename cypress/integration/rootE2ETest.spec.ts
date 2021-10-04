it('ルートパスに訪問できるか', () => {
  cy.visit('/');
});
it('メインセクションに内容が含まれているか', () => {
  cy.contains('UruhaRushia');
  cy.contains('fanSite!');
});
it('グッズセクションに内容が含まれているか', () => {
  cy.contains('グッズ紹介');
  cy.contains('公式');
  cy.contains('Booth');
  cy.contains('ホロライブ公式ショップ');
});
