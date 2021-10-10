/* eslint-disable @next/next/no-img-element */
import React, { VFC } from 'react';
// import Image from 'next/image';
import styles from './mainsection.module.scss';

const MainSection: VFC = () => {
  return (
    <section id="MainSection" className={styles.container}>
      {/* 外枠 */}
      <div className={styles.container__frame}></div>
      {/* 要素 */}
      <div className={styles.container__items}>
        <div className={styles.container__title}>
          <div className="flex-grow mt-4 mb-4 text-3xl lg:text-6xl">
            <div className={styles.container__title__backgroundImage}>
              <div className="flex flex-col justify-center items-center mt-2 text-center">
                <p className={styles.title__animation1}>UruhaRushia</p>
                <span className={styles.title__animation2}>fanSite!</span>
              </div>
            </div>
          </div>
          <div className="flex-grow text-center">
            <div className="flex flex-wrap justify-center">
              <div className="px-4 w-4/5 sm:w-3/5 lg:w-3/5">
                <div className={styles.rushiaImg}></div>
                {/* <img
                    alt="rushia"
                    src="/uruharushia_.svg"
                    className="max-w-full h-auto align-middle border-none"
                    width={'400px'}
                    height={'800px'}
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
