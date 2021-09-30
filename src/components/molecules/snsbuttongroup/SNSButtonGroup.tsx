import React from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import SNSButton from '../../../components/atoms/buttons/snsbutton/SNSButton';
import styles from './snsbuttongroup.module.scss';

export type SNSButtonGroupProps = {
  label: string;
  colorMode: string;
};

const SNSButtonGroup = ({ colorMode = '#FFFFFFFF', ...props }: SNSButtonGroupProps) => {
  return (
    <div className={styles.sns_button_group__container}>
      <span className={styles.sns_button_group__container__title}>{props.label}</span>
      <span className={styles.sns_button_group__container__icon}>
        <SNSButton sns="twitter">
          <FaTwitter color={colorMode} />
        </SNSButton>
      </span>

      <span className={styles.sns_button_group__container__icon}>
        <SNSButton sns="youtube">
          <FaYoutube color={colorMode} />
        </SNSButton>
      </span>
    </div>
  );
};

export default SNSButtonGroup;
