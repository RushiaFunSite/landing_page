# 潤羽るしあ のファンサイト

我らが推し、ホロライブ3期生潤羽るしあのファンサイトのGithubになります。  
当サイトはカバー株式会社の[ガイドライン](https://www.hololive.tv/terms)に従い趣味の範疇での製作を行っています。  
バグの修正、連絡や機能の追加など、PRなど大歓迎ですので常識の範囲内かつ、よりよくするためにご要望のほういただけるとすごく嬉しいです。

## 使用技術/環境

※Next.jsを用いた開発を行っているため`Node.js`の環境が必須です。

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

Storybookの立ち上げ
```bash
yarn storybook
```

Storybookのビルド
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

jestを用いたテスト
```bash
yarn test
```

### 開発環境の確認方法

```bash
yarn dev
```

上記のコマンドを実行することで
 [http://localhost:3000](http://localhost:3000) にアプリケーションが立ち上がりますのでアクセスして確認することができます。  
最初に開かれる[http://localhost:3000](http://localhost:3000) では `pages/index.tsx`が割り振られています。

開発環境ではホットリロードが働くため内容を変更することで修正箇所のプレビューが即座に可能です。  
VSCodeではESint、Prettierのアドオンを導入しているとプロジェクト内のそれぞれの設定が働き、自動でコードのフォーマットをかけてくれます。

## Learn More

記載中
