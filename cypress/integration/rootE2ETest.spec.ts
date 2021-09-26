it('ルートパスに訪問できるか', () => {
  cy.visit('/');
});
it('ルートにあるボタンをクリックできるか', () => {
  cy.get('[data-test-id=test]').click();
});
