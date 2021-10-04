import Layout from '@/layout/layout';
import type { NextPage } from 'next';
import MainSection from '@/components/templates/MainSection';
import AboutSection from '@/components/templates/AboutSection';
import GoodsSection from '@/components/templates/GoodsSection';
import FAQSection from '@/components/templates/FAQSection';
import Header from '@/components/organisms/header/Header';
import useScroll from '@/hooks/useScroll';

const Home: NextPage = () => {
  const { isHeaderActive } = useScroll(900);
  // TODO: デプロイ先のフルリンクをのちに設定
  var url = 'http://localhost:3000/console.gif';
  console.log(
    '%cなにみてるのです？',
    'color:red; font-size:20px; padding: 10px; background: black; border-radius: 5px;',
  );
  console.log(
    '%cハンバーグになるか冷蔵庫に入るかどっちがいい？',
    'color:red; font-size:20px; padding: 10px; background: black; border-radius: 5px;',
  );
  console.log(
    '%c ',
    'padding: 128px 240px; background-repeat: no-repeat; background-position: center; background: url(' +
      url +
      ');',
  );
  return (
    <Layout>
      <div className="sticky top-0 z-50">
        <div className="flex flex-col w-screen">
          <Header isActive={isHeaderActive} />
        </div>
      </div>
      <MainSection />
      <AboutSection />
      <GoodsSection />
      <FAQSection />
    </Layout>
  );
};

export default Home;
