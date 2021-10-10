# 潤羽るしあ のファンサイト

我らが推し、ホロライブ 3 期生潤羽るしあのファンサイトの Github になります。  
当サイトの目的は `潤羽るしあ` を多岐にわたって知ってもらいたい、日頃の感謝を伝えたいをモットーにしております。

_当サイトはカバー株式会社の[ガイドライン](https://www.hololive.tv/terms)に従い趣味の範疇での製作を行っています。_

バグの修正、連絡や機能の追加など、PR など大歓迎ですので常識の範囲内かつ、よりよくするためにご要望のほういただけるとすごく嬉しいです。

## 使用技術/環境

※Next.js を用いた開発を行っているため`Node.js`の環境が必須です。

使用エディタ: VSCode

### フロントエンド技術

パッケージマネージャ: yarn

- TypeScript
- Next.js
- sass/scss
- tailwind
- storybook
- jest

## Getting Started

パッケージの導入

```bash
yarn
```

開発環境の立ち上げ

```bash
yarn dev
```

開発環境のビルド

```bash
yarn build
```

Storybook の立ち上げ

```bash
yarn storybook
```

Storybook のビルド

```bash
yarn build-storybook
```

Eslint

```bash
yarn lint
```

Prettier

```bash
yarn prettier
```

Stylelint

```bash
yarn stylelint
or
yarn stylelint:fix
```

jest を用いたテスト

```bash
yarn test
```

Cypress を用いたテスト  
※ dev 環境を立ち上げてから以下コマンドを打ってください。

```bash
yarn cy:run
```

### 開発環境の確認方法

```bash
yarn dev
```

上記のコマンドを実行することで
[http://localhost:3000](http://localhost:3000) にアプリケーションが立ち上がりますのでアクセスして確認することができます。  
最初に開かれる[http://localhost:3000](http://localhost:3000) では `pages/index.tsx`が割り振られています。

開発環境ではホットリロードが働くため内容を変更することで修正箇所のプレビューが即座に可能です。  
VSCode では ESint、Prettier のアドオンを導入しているとプロジェクト内のそれぞれの設定が働き、自動でコードのフォーマットをかけてくれます。

## Learn More

chromatic（Storybook、ビジュアルリグレッションテスト）  
[コンポーネントショーケース](https://www.chromatic.com/builds?appId=6156d7f3f08a48003a031d56)

デプロイリンク  
[潤羽るしあファンサイト](https://www.uruharushia.work)

## 参考

[stylelint 設定](https://gist.github.com/buchiya4th/f4ca1be2ab98ee5a8098fa68a93e752c)
