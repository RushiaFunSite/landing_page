/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaTwitter, FaFacebook, FaReddit } from 'react-icons/fa';
import SNSButton from '../../../components/atoms/buttons/snsbutton/SNSButton';
import styles from './snsbuttongroup.module.scss';

export type SNSButtonGroupProps = {
    label: string;
    colorMode?: string;
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
                <SNSButton sns="facebook">
                    <FaFacebook color={colorMode} />
                </SNSButton>
            </span>

            <span className={styles.sns_button_group__container__icon}>
                <SNSButton sns="line">
                    <img
                        alt="line"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
                    />
                </SNSButton>
            </span>

            <span className={styles.sns_button_group__container__icon}>
                <SNSButton sns="reddit">
                    <FaReddit color={colorMode} />
                </SNSButton>
            </span>
        </div>
    );
};

export default SNSButtonGroup;
