import Layout from '@/layout/layout';
import React from 'react';
import Link from 'next/link';
import AnchorLinkLabel from '@/components/atoms/linkLabels/anchorLinkLabel';

const termsOfUse = () => {
  return (
    <Layout>
      <div className="mt-10 lg:px-20 md:px-20">
        <p className="text-3xl text-center">利用規約</p>
        <div className="relative m-5">
          <div className="border-dotted absolute h-full top-0"></div>
          <ul className="list-none m-0 p-0">
            <li className="mb-2">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">利用規約について</div>
              </div>
              <div className="ml-12">
                <p>
                  この利用規約（以下，「本規約」といいます。）は、カバー株式会社（
                  <AnchorLinkLabel
                    label="二次創作ガイドライン"
                    href="https://www.hololive.tv/terms"
                  />
                  ）に従いサービス開発のほうを行っております。
                </p>
                <p>
                  当サービス開発者（以下，「開発者」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。
                </p>
                <p>
                  利用ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                </p>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第1条（適用）</div>
              </div>
              <div className="ml-12">
                <p>
                  1.
                  本規約は，ユーザーと開発者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                </p>
                <p>
                  2.
                  開発者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
                </p>
                <p>
                  3.
                  本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                </p>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第2条（禁止事項）</div>
              </div>
              <div>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</div>
              <div className="ml-12">
                <p>1. 法令または公序良俗に違反する行為 犯罪行為に関連する行為</p>
                <p>
                  2.
                  本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
                </p>
                <p>
                  3.
                  開発者，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
                </p>
                <p>4. 本サービスによって得られた情報を商業的に利用する行為</p>
                <p>5. 開発者のサービスの運営を妨害するおそれのある行為</p>
                <p>6. 不正アクセスをし，またはこれを試みる行為</p>
                <p>7. 他のユーザーに関する個人情報等を収集または蓄積する行為</p>
                <p>8. 不正な目的を持って本サービスを利用する行為</p>
                <p>
                  9. 本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
                </p>
                <p>10. 他のユーザーに成りすます行為</p>
                <p>11. 開発者が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為</p>
                <p>12. 面識のない異性との出会いを目的とした行為</p>
                <p>
                  13.
                  開発者のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
                </p>
                <p>14. その他，開発者が不適切と判断する行為</p>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第3条（本サービスの提供の停止等）</div>
              </div>
              <div className="ml-12">
                <p>
                  1.
                  開発者は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <div className="ml-5">
                  <p>1. 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</p>
                  <p>
                    2.
                    地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
                  </p>
                  <p>3. コンピュータまたは通信回線等が事故により停止した場合</p>
                  <p>4. その他，開発者が本サービスの提供が困難と判断した場合</p>
                </div>
                <p>
                  2.
                  開発者は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
                </p>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第4条（利用制限）</div>
              </div>
              <div className="ml-12">
                <p>
                  1.
                  開発者は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限することができるものとします。
                </p>
                <div className="ml-5">
                  <p>1. 本規約のいずれかの条項に違反した場合</p>
                  <p>1. 開発者が本サービスの利用を適当でないと判断した場合</p>
                </div>
                <p>
                  2.
                  開発者は，本条に基づき開発者が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
                </p>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第5条（保証の否認および免責事項）</div>
              </div>
              <div className="ml-12">
                <p>
                  1.
                  開発者は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）
                  がないことを明示的にも黙示的にも保証しておりません。
                </p>
                <p>
                  2.
                  開発者は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する開発者とユーザーとの間の契約（本規約を含みます。）
                  が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
                </p>
                <p>
                  3.
                  前項ただし書に定める場合であっても，開発者は，開発者の過失（重過失を除きます。）
                  による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（開発者またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）
                  について一切の責任を負いません。また，開発者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，
                  ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
                </p>
                <p>
                  4.
                  開発者は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
                </p>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第6条（サービス内容の変更等）</div>
              </div>
              <div className="ml-12">
                開発者は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第7条（利用規約の変更）</div>
              </div>
              <div className="ml-12">
                開発者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第8条（通知または連絡）</div>
              </div>
              <div className="ml-12">
                ユーザーと開発者との間の通知または連絡は，開発者の定める方法によって行うものとします。
                開発者は,ユーザーから,開発者が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,
                これらは,発信時にユーザーへ到達したものとみなします。
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第9条（権利義務の譲渡の禁止）</div>
              </div>
              <div className="ml-12">
                ユーザーは，開発者の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
              </div>
            </li>
            <li className="mb-5">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 font-medium">第10条（準拠法・裁判管轄）</div>
              </div>
              <div className="ml-12">
                <p>1. 本規約の解釈にあたっては，日本法を準拠法とします。</p>
                <p>
                  2.
                  本サービスに関して紛争が生じた場合には，開発者の本店所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default termsOfUse;
