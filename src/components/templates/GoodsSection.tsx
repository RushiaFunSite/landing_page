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
      <div className="flex inset-0 top-0 left-0 z-50 justify-center items-center mb-80 h-screen bg-center bg-no-repeat bg-cover outline-none focus:outline-none">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-wrap justify-center mt-24 text-center">
            <div className="px-12 md:px-4 w-full md:w-6/12">
              <h1 className="text-2xl sm:text-3xl font-medium text-center text-gray-900">
                グッズ紹介
              </h1>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-600">
                現在潤羽るしあのグッズは公式ストアで販売されています。特にBoothでは周年記念グッズや誕生日グッズなどが販売されています。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mt-8 mb-8">
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
