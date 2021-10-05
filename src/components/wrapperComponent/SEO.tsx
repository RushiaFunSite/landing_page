import { NextSeo } from 'next-seo';

const SEO = () => {
  return (
    <NextSeo
      title="潤羽るしあファンサイト"
      description="潤羽るしあを広めるために作られたファンサイト"
      canonical="https://www.uruharushia.work/"
      openGraph={{
        url: 'https://www.uruharushia.work',
        title: '潤羽るしあファンサイト',
        description: '潤羽るしあを広めるために作られたファンサイト',
        images: [
          {
            url: 'https://www.uruharushia.work/favicon.png',
            width: 600,
            height: 600,
            alt: '潤羽るしあファンサイト',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.uruharushia.work/favicon.png',
            width: 800,
            height: 800,
            alt: '潤羽るしあファンサイト',
            type: 'image/jpeg',
          },
          { url: 'https://www.uruharushia.work/favicon.png' },
          { url: 'https://www.uruharushia.work/favicon.png' },
        ],
        site_name: '潤羽るしあファンサイト',
      }}
      twitter={{
        handle: '@Fande4d',
        site: '@Fande4d',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default SEO;
