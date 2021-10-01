/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Image from 'next/image';
import styles from './headertitle.module.scss';

const HeaderTitle = () => {
  return (
    <div className="flex justify-center items-center lg:text-2xl">
      <div className={styles.titleImage}></div>
      <p>
        潤羽るしあ<span className="text-green-500">ファンサイト</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
