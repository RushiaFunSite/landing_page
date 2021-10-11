import React, { ReactChild } from 'react';
import Styles from './snsbutton.module.scss';

import {
    FacebookShareButton,
    LineShareButton,
    RedditShareButton,
    TwitterShareButton,
} from 'react-share';

export type SNSProps = {
    children: ReactChild;
    sns: string;
    colorMode?: string;
};

const SNSButton = (props: SNSProps) => {
    const siteUrl = 'http://www.uruharushia.work/';
    const siteTitle = '潤羽るしあファンサイト';

    const Twitter = () => {
        return (
            <TwitterShareButton
                className={Styles.sns_button}
                url={siteUrl}
                title={siteTitle}
                hashtags={['潤羽るしあ']}
                related={['uruharushia']}
            >
                {props.children}
            </TwitterShareButton>
        );
    };

    const Facebook = () => {
        return (
            <FacebookShareButton
                className={Styles.sns_button}
                url={siteUrl}
                quote={siteTitle}
                hashtag="潤羽るしあ"
            >
                {props.children}
            </FacebookShareButton>
        );
    };

    const Line = () => {
        return (
            <LineShareButton className={Styles.sns_button} url={siteUrl} title={siteTitle}>
                {props.children}
            </LineShareButton>
        );
    };

    const Reddit = () => {
        return (
            <RedditShareButton className={Styles.sns_button} url={siteUrl} title={siteTitle}>
                {props.children}
            </RedditShareButton>
        );
    };

    return props.sns === 'twitter' ? (
        <Twitter />
    ) : props.sns === 'facebook' ? (
        <Facebook />
    ) : props.sns === 'line' ? (
        <Line />
    ) : props.sns === 'reddit' ? (
        <Reddit />
    ) : (
        <Twitter />
    );
};

export default SNSButton;
