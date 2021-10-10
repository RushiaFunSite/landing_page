import React, { VFC } from 'react';

const FAQSection: VFC = () => {
  return (
    <section id="FAQSection">
      <div className="container py-24 px-5 mx-auto">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-2xl sm:text-3xl font-medium text-center text-gray-900">
            よくあるご質問（FAQ:Frequently Asked Question）
          </h1>
          <p className="mx-auto lg:w-3/4 xl:w-2/4 font-light leading-relaxed">
            よくある質問や配信を楽しむためのルールを引用しています。
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 sm:mx-auto sm:mb-2 lg:w-4/5">
          <div className="py-2 px-4 w-full lg:w-1/2">
            <details className="mb-4">
              <summary className="py-2 px-4 font-semibold bg-gray-200 rounded-md">
                待機中のルール
              </summary>

              <span className="text-lg font-light leading-relaxed text-gray-600">
                リスナー達の揉め事などの防止策で待機中は基本的に雑談禁止となります。
              </span>
            </details>
            <details className="mb-4">
              <summary className="py-2 px-4 font-semibold bg-gray-200 rounded-md">
                鳩とは？？
              </summary>

              <span className="text-lg font-light leading-relaxed text-gray-600">
                鳩こと「伝書鳩行為」とは、「○○（他の配信者など）が××（配信主）のこと、こう言ってたよ」と、配信のチャット欄などで伝える行為のことであったり
                「○○から来ました」や「○○へ行きます」などの配信者を不快にさせえうようなコメントも伝書鳩にあたるとされています。
                ただ例外として配信の切り忘れや不遇な事態が発生した場合の鳩行為は時には配信者を救うため一概に全てが悪ではないので判断は難しいです。
                ですが基本的にはやめましょう。
              </span>
            </details>
            <details className="mb-4">
              <summary className="py-2 px-4 font-semibold bg-gray-200 rounded-md">
                メンバーとは、どうやって加入するのか?
              </summary>

              <span className="text-lg font-light leading-relaxed text-gray-600">
                メンバーこと「メンバーシップ」とはYoutubeのチャンネルの月額課金制のサービスになっており、加入することで自らのアイコンの横にメンバーバッチというものが付与されます。
                他にも配信者が設定しているメンバー限定用スタンプを使えたり、メンバー限定コミュニティ、メンバー限定配信を閲覧することが可能になります。
                最近追加されたマイルストーンチャットというメンバー加入して何か月というのをコメントで送信する機能もあります。
                メンバー限定配信やメンバー限定コミュニティでは配信者のいつもと違う姿が見れたりメンバー限定でイラストを公開したりなど多種多様な特典が得られます。
                メンバー加入時の金額についてはiOSだといわゆるApple税といわれる通常料金にプラスで金額が掛かる仕様があったりするので加入する際はWeb版のYoutubeから加入するのをお勧めします。
              </span>
            </details>
          </div>
          <div className="py-2 px-4 w-full lg:w-1/2">
            <details className="mb-4">
              <summary className="py-2 px-4 font-semibold bg-gray-200 rounded-md">
                指示厨/ワザップとは？
              </summary>

              <span className="py-2 px-4 text-lg font-light leading-relaxed text-gray-600">
                指示厨とは、コメントにおいてああしろこうしろと動画内でのアクションに対してレスポンスを求めるコメントを書き込むユーザーへの蔑称、レッテルの一種。
                配信者は命令を聴くロボットではありません。人だし心もあります。常識の範囲内でコメントをするようにしましょう。
                <br />
                ワザップ!は株式会社エムフロの子会社である株式会社イーストビームが企画・運営を行っているゲーム情報の総合ポータルサイトで
                誰でも自由に書き込めるユーザー投稿型の情報サイトのため、インターネット黎明期には、裏技や攻略情報の意見交換の場としてゲームユーザーに親しまれていました。
                ですがユーザーが自由に書き込めるため、嘘の情報も含まれているのでそこで得る情報には注意が必要です。
                そこで勃発した間違った情報や偽の裏技などに騙され、感情的で幼稚な煽り文句が投稿されることがあり、かの有名な
                <br />
                「あなたを詐欺罪と器物損壊罪で訴えます！理由はもちろんお分かりですね？あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！覚悟の準備をしておいて下さい。ちかいうちに訴えます。裁判も起こします。裁判所にも問答無用できてもらいます。慰謝料の準備もしておいて下さい！貴方は犯罪者です！刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！」
                <br />
                という名言が生まれました。
                しばしばネット界隈でネタにされておりワザップといえば「嘘の情報」という言葉の概念を持つようになり、よく嘘の情報が飛び交うことで「それはワザップ」などと言われるようになりました。
              </span>
            </details>
            <details className="mb-4">
              <summary className="py-2 px-4 font-semibold bg-gray-200 rounded-md">
                スパチャとは？
              </summary>

              <span className="py-2 px-4 text-lg font-light leading-relaxed text-gray-600">
                スパチャこと「スーパーチャット」とはYouTubeのライブチャットや動画の公開時に、チャット欄で自分のメッセージを目立たせるための権利を購入する機能。ギフティング機能の一種である投げ銭です。
                よく誕生日やメンバー記念日、楽しんだお礼や驚かせるためなどのお返しとしてよく使われています。
                ですが人によっては義務化したり、後先考えず大金を投げてしまうなど自らが不幸になるような使い方をする方々もいます。
                あくまでスパチャは娯楽の一環であり配信者もスパチャを必ず読み上げないといけないなどの縛りはありません。
                そのためスパチャが読まれなかったなどで逆上したり、はたまた配信者が大量のスパチャを読み上げるのに数時間かけ体調が悪くなってしまうというのは悪循環です。
                あくまでこちらも倫理観を持ちリスナー、配信者共々無理をしない程度に楽しみましょう。
              </span>
            </details>
            <details className="mb-4">
              <summary className="py-2 px-4 font-semibold bg-gray-200 rounded-md">
                るしあちゃんかわいい
              </summary>

              <span className="py-2 px-4 text-5xl">わかる！！！かわいい！！すき！！！！！！！</span>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
