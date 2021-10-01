/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Image from 'next/image';
import styles from './headertitle.module.scss';

const HeaderTitle = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__container__image}></div>
      <p>
        潤羽るしあ<span className={styles.header__container__label}>ファンサイト</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
