import React, { VFC } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';
import ShopCard from '../molecules/shopcard/ShopCard';

const GoodsSection: VFC = () => {
  const router = useRouter();
  const toShop = (href: string) => {
    gtag.event({
      action: 'submit_form',
      category: 'contact',
      label: { toShop: href },
    });
    router.push(href);
  };
  return (
    <section id="GoodsSection">
      <div
        className="min-w-screen h-screen animated fadeIn faster left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="min-h-screen flex flex-col items-center justify-center ">
          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">グッズ紹介</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                現在潤羽るしあのグッズは公式ストアで販売されています。特にBoothでは周年記念グッズや誕生日グッズなどが販売されています。
              </p>
            </div>
          </div>
          <div className="grid mt-8 mb-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            <ShopCard
              shopCategory="公式"
              shopImage="booth"
              shopName="Booth"
              shopLinkText="https://hololive.booth.pm/"
              onClick={() => toShop('https://hololive.booth.pm/')}
            />
            <ShopCard
              shopCategory="公式"
              shopImage="hololivestore"
              shopName="ホロライブ公式ショップ"
              shopLinkText="https://shop.hololivepro.com/"
              onClick={() => toShop('https://shop.hololivepro.com/')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoodsSection;
