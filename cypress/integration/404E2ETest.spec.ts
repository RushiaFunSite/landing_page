it('404に訪問できるか', () => {
  // 存在しないパス
  cy.request({ url: '/404', failOnStatusCode: false }).its('status').should('equal', 404);
  cy.visit('/404', { failOnStatusCode: false });
});
it('ページの内容が含まれているか', () => {
  cy.contains('404');
  cy.contains('page not found');
  cy.contains('申し訳ございません。ページが存在していません。');
});
it('ボタンをクリックできるか', () => {
  cy.get('[data-test-id=topPage]').click();
});
