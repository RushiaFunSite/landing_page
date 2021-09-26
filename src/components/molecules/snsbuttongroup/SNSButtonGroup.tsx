import React from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import SNSButton from '@/components/atoms/snsbutton/SNSButton';
import styles from './snsbuttongroup.module.scss';

type SNSProps = {
  label: string;
  colorMode: string;
};

const SNSButtonGroup = (props: SNSProps) => {
  return (
    <div className={styles.sns_button_group__container}>
      <span className={styles.sns_button_group__container__title}>{props.label}</span>
      <span className={styles.sns_button_group__container__icon}>
        <SNSButton sns="twitter">
          <FaTwitter color={props.colorMode} />
        </SNSButton>
      </span>

      <span className={styles.sns_button_group__container__icon}>
        <SNSButton sns="youtube">
          <FaYoutube color={props.colorMode} />
        </SNSButton>
      </span>
    </div>
  );
};

export default SNSButtonGroup;
