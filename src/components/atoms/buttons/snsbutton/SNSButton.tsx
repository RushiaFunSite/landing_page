import React, { ReactChild } from 'react';
import styles from './snsbutton.module.scss';
import Router from 'next/router';

export type SNSProps = {
  children: ReactChild;
  sns: string;
  colorMode?: string;
};

const SNSButton = (props: SNSProps) => {
  const twitter = 'https://twitter.com/uruharushia';
  const youtube = 'https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ';
  const router = (snsName: string) => {
    switch (snsName) {
      case 'twitter':
        Router.push(twitter);
        break;

      case 'youtube':
        Router.push(youtube);
        break;

      default:
        break;
    }
  };

  return (
    <button
      aria-label="snsButton"
      type="button"
      className={styles.sns_button}
      onClick={() => router(props.sns)}
    >
      {props.children}
    </button>
  );
};

export default SNSButton;
