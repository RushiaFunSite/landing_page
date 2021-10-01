/* eslint-disable @next/next/no-img-element */
import React, { VFC } from 'react';
// import Image from 'next/image';
import styles from './mainsection.module.scss';

const MainSection: VFC = () => {
  return (
    <section id="MainSection" className={styles.container}>
      <div className={styles.container__frame}>
        <div className={styles.container__frame__items}>
          <div className={styles.container__frame__title}>
            <div className="flex-grow lg:text-6xl text-3xl mt-4 mb-4">
              <div className={styles.container__frame__title__backgroundImage}>
                <div className="flex flex-col justify-center items-center text-center mt-2">
                  <p className={styles.title__animation1}>UruhaRushia</p>
                  <span className={styles.title__animation2}>fanSite!</span>
                </div>
              </div>
            </div>
            <div className="flex-grow text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-4/5 lg:w-3/5 sm:w-3/5 px-4">
                  <img
                    alt="rushia"
                    src="/uruharushia_.png"
                    className="max-w-full h-auto align-middle border-none"
                    width={'400px'}
                    height={'800px'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
