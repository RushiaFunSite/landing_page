import { VFC } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/atoms/buttons/Button';
import * as gtag from '../lib/gtag';
import styles from './custom404.module.scss';

const Custom404: VFC = () => {
  const router = useRouter();
  const toHome = () => {
    gtag.event({
      action: 'submit_form',
      category: 'contact',
      label: { toHome: '404からホームへ遷移' },
    });

    router.push('/');
  };
  return (
    <div
      className={[
        'flex items-center justify-center min-h-screen bg-fixed bg-cover bg-right text-gray-800',
        styles.error_bg,
      ].join(' ')}
    >
      <div className="container flex flex-col md:flex-row justify-center items-center px-5">
        <div className="max-w-md">
          <div className={['text-5xl font-bold', styles.text_shadow].join(' ')}>404</div>
          <p
            className={['text-2xl md:text-3xl font-light leading-normal', styles.text_shadow].join(
              ' ',
            )}
          >
            page not found{' '}
          </p>
          <p className={['mt-5 mb-8 font-bold', styles.text_shadow].join(' ')}>
            申し訳ございません。ページが存在していません。
          </p>
          <Button primary={true} label="トップページへ戻る" onClick={toHome} />
        </div>
        <div className="max-w-lg"></div>
      </div>
    </div>
  );
};

export default Custom404;
