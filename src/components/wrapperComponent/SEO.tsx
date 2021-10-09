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
            url: 'https://www.uruharushia.work/maskable_icon_x384.png',
            width: 384,
            height: 384,
            alt: '潤羽るしあファンサイト',
            type: 'image/png',
          },
          {
            url: 'https://www.uruharushia.work/maskable_icon_x512.png',
            width: 512,
            height: 512,
            alt: '潤羽るしあファンサイト',
            type: 'image/png',
          },
          { url: 'https://www.uruharushia.work/maskable_icon_x512.png' },
          { url: 'https://www.uruharushia.work/maskable_icon_x512.png' },
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
