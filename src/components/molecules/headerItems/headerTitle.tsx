import React from 'react';
import Image from 'next/image';

const HeaderTitle = () => {
  return (
    <div className="flex justify-center items-center lg:text-2xl">
      <Image alt="rushia_butterfly" src="/butterfly.png" height="60px" width="70px" />
      <p>
        潤羽るしあ<span className="text-green-500">ファンサイト</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
