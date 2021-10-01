/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Image from 'next/image';

const HeaderTitle = () => {
  return (
    <div className="flex justify-center items-center lg:text-2xl">
      <img alt="rushia_butterfly" src="/butterfly.svg" height="60px" width="70px" />
      <p>
        潤羽るしあ<span className="text-green-500">ファンサイト</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
