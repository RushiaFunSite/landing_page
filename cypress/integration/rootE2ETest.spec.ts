it('ルートパスに訪問できるか', () => {
  cy.visit('/');
});
it('メインセクションに内容が含まれているか', () => {
  cy.contains('UruhaRushia');
  cy.contains('fanSite!');
});
