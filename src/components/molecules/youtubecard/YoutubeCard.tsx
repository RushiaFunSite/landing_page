import React, { VFC } from 'react';
import Styles from './youtubecard.module.scss';

export type YoutubeCardProps = {
  link: string;
  title: string;
};

const YoutubeCard: VFC<YoutubeCardProps> = (props) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.card__video}>
        <span className={Styles.card__video__title}>{props.title}</span>
        <iframe
          width="640"
          height="360"
          className={Styles.card__video__iframe}
          src={props.link}
          title={props.title}
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeCard;
