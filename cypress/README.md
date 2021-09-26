# Cypress

E2E テストやビジュアルリグレッションテストなどに使用できるテスティングライブラリ

## 使い方

dev 環境、またはデプロイ環境を用意し`cypress.json`に記載されている baseUrl のリンクにアクセスできる状態にする

dev 環境  
`yarn dev`

dev の場合別ターミナルで  
`yarn cy:run`

を行うことでテストを走らせる事ができる。

テストに成功した際は  
`./cypress/videos/`  
に実行状態の動画が生成される。

また失敗の際は  
`./cypress/screenshots/`  
にテストが失敗した時点のスクリーンショットが生成されます。

## テストファイル格納場所

`./cypress/integration/`  
以下に`○○.spec.ts | ○○.spec.js`という命名のファイルを置くことで自動実行されます。
