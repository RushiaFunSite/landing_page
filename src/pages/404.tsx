import styles from './custom404.module.scss';
const Custom404 = () => {
  return (
    <div
      className={[
        'flex items-center justify-center min-h-screen bg-indigo-500  bg-fixed bg-cover bg-right text-red-600',
        styles.error_bg,
      ].join(' ')}
    >
      <div className="container flex flex-col md:flex-row items-center justify-center px-5">
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

          <button
            data-test-id="topPage"
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
          >
            トップページへ戻る
          </button>
        </div>
        <div className="max-w-lg"></div>
      </div>
    </div>
  );
};

export default Custom404;
