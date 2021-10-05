it('利用規約ページに訪問できるか', () => {
  cy.visit('/termsOfUse');
});
it('ページの内容が含まれているか', () => {
  cy.contains('利用規約');
  cy.contains('第1条（適用）');
  cy.contains('第2条（禁止事項）');
  cy.contains('第3条（本サービスの提供の停止等）');
  cy.contains('第4条（利用制限）');
  cy.contains('第5条（保証の否認および免責事項）');
  cy.contains('第6条（サービス内容の変更等）');
  cy.contains('第7条（利用規約の変更）');
  cy.contains('第8条（通知または連絡）');
  cy.contains('第9条（権利義務の譲渡の禁止）');
  cy.contains('第10条（準拠法・裁判管轄）');
  cy.contains('カバー株式会社');
  cy.contains('二次創作ガイドライン');
});
