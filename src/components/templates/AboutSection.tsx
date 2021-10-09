import React, { VFC } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../atoms/buttons/Button';
import YoutubeCard from '../molecules/youtubecard/YoutubeCard';
import Styles from './aboutsection.module.scss';
import * as gtag from '../../lib/gtag';
import AnchorLinkLabel from '../atoms/linkLabels/anchorLinkLabel';

const AboutSection: VFC = () => {
  const router = useRouter();
  const toYoutube = () => {
    gtag.event({
      action: 'submit_form',
      category: 'contact',
      label: { toYoutube: 'Youtubeへ遷移' },
    });

    router.push('https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ');
  };
  const toCoverProfilePage = () => {
    gtag.event({
      action: 'submit_form',
      category: 'contact',
      label: { toCoverProfilePage: 'ホロライブのプロフィールページへ遷移' },
    });

    router.push('https://hololive.hololivepro.com/talents/uruha-rushia/');
  };
  return (
    <section id="AboutSection" className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
      <div className="container mx-auto overflow-hidden pb-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <div className={Styles.avaterImage}></div>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            {/* 潤羽るしあとは */}
            <h3 className="text-3xl mb-2 font-semibold leading-normal">潤羽るしあとは</h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              ホロライブプロダクション所属のバーチャルYouTuber。
            </p>
            <p className="text-lg font-light leading-relaxed text-blueGray-600">
              ホロライブ3期生。清楚担当。
            </p>
            <p className="text-lg font-light leading-relaxed text-blueGray-600">
              すごくファン思いでゲーム中でも積極的にコメントを拾いにいったり、
              ファンを癒すために激甘やかしASMR配信や朝活で料理配信を行い彼女目線で話しかけてくれるなどサービス精神満点な配信を行う。
              他にもスパチャも値段関係なく丁寧に読み上げてくれるのも特徴。
            </p>
            <p className="text-lg font-light leading-relaxed text-blueGray-600">
              メンヘラ属性があり「親しい相手、リスナーの浮気を許さない」というヤンデレ系の発言をすることもある。
              包丁がメインウェポンだったが桐生ココから受け継いだドスが現在のメインウェポン。
            </p>
            <div className="block pb-6">
              <p className="mt-4">関連キーワード</p>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel label="ホロライブプロダクション" href="https://www.hololive.tv/" />
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel
                  label="バーチャルYouTuber"
                  href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%ABYouTuber"
                />
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel
                  label="ホロライブ3期生"
                  href="https://ja.wikipedia.org/wiki/%E3%83%9B%E3%83%AD%E3%83%A9%E3%82%A4%E3%83%96%E3%83%97%E3%83%AD%E3%83%80%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3#%E3%83%9B%E3%83%AD%E3%83%A9%E3%82%A4%E3%83%963%E6%9C%9F%E7%94%9F"
                />
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel label="ASMR" href="https://ja.wikipedia.org/wiki/ASMR" />
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel
                  label="スパチャ"
                  href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%81%E3%83%A3%E3%83%83%E3%83%88"
                />
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel
                  label="ヤンデレ属性"
                  href="https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%B3%E3%83%87%E3%83%AC"
                />
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel
                  label="桐生ココ"
                  href="https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w"
                />
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                <AnchorLinkLabel
                  label="受け継がれしドス"
                  href="https://www.youtube.com/watch?v=pcu1e6VF-jQ"
                />
              </span>
            </div>
            <Button
              primary={true}
              label="潤羽るしあの公式プロフィールへ"
              onClick={toCoverProfilePage}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <YoutubeCard
                  title="睡眠導入"
                  link="https://www.youtube-nocookie.com/embed/Tc8AlL27G7A"
                />
                <YoutubeCard
                  title="オリ曲「アイリス。」"
                  link="https://www.youtube-nocookie.com/embed/NtRpDpfE69Y"
                />
                <YoutubeCard
                  title="朝活"
                  link="https://www.youtube-nocookie.com/embed/D7LdSkdIjBw"
                />
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <YoutubeCard
                  title="#潤羽るしあ2周年記念"
                  link="https://www.youtube-nocookie.com/embed/ZE8gTiKBjA8"
                />
                <YoutubeCard
                  title="FallGuys配信"
                  link="https://www.youtube-nocookie.com/embed/flThlORUle0"
                />
                <YoutubeCard
                  title="潤羽るしあ初配信"
                  link="https://www.youtube-nocookie.com/embed/xqsOegkgDAc"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">おすすめ配信</h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-2 text-blueGray-600">
              睡眠導入などのASMR配信はすごく甘々で癒されますが朝活でのふにゃふにゃな姿もとてもかわいいです。
            </p>
            <p className="text-lg font-light leading-relaxed mb-2 text-blueGray-600">
              オリジナル楽曲も出しており、なんと作詞が潤羽るしあ本人によるものになっています。
            </p>
            <p className="text-lg font-light leading-relaxed mb-2 text-blueGray-600">
              他にもたくさん配信を行っておりますがASMRとはまた違った姿を見せてくれることがあります。
              それがゲーム配信です。
            </p>
            <p className="text-lg font-light leading-relaxed mb-2 text-blueGray-600">
              彼女はリスナーを癒すため、活動に常に全力で取り組んでいますがゲームでも同じです。
              ASMRなどとは一転、本気になるあまり大声を出したり攻撃的になったりとものすごいギャップがあります。
              本人曰く「ゲームのキャラクターに乗っ取られている」とのことです。
              こういったギャップもすごく見どころになっています。
            </p>
            <Button primary={true} label="潤羽るしあのYoutubeへ" onClick={toYoutube} />
          </div>
        </div>
      </div>

      <div id="ComingSoon" className="container mx-auto px-4 pb-32 pt-48">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold">誠意制作中！</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                るしあちゃんの可愛さを広めるためWebアプリケーションを制作中です！
                当サイトもるしあちゃんを広めるため作成いたしました！
                以下のアプリの製作をお手伝いしてくださる方がいましたら気軽に
                <AnchorLinkLabel label="Riml" href="https://twitter.com/Fande4d" />
                まで連絡お願いします！
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">るしあちゃんクイズ</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">るしあちゃんボタン</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">るしあちゃんなでなで</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            {/* <div className={Styles.comingSoonImage}></div> */}
            <video className={Styles.comingSoonImage} autoPlay loop muted playsInline>
              <source src="/rushia_gif.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
