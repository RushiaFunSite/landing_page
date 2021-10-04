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
it('FAQセクションに内容が含まれているか', () => {
  cy.contains('よくあるご質問（FAQ:Frequently Asked Question）');
  cy.contains('待機中のルール');
  cy.contains('鳩とは？？');
  cy.contains('メンバーとは、どうやって加入するのか?');
  cy.contains('指示厨/ワザップとは？');
  cy.contains('スパチャとは？');
  cy.contains('るしあちゃんかわいい');
});
