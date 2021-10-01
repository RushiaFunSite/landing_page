import Layout from '@/layout/layout';
import type { NextPage } from 'next';
import * as gtag from '@/lib/gtag';
import React, { useEffect, useState } from 'react';
import MainSection from '@/components/templates/MainSection';
import AboutSection from '@/components/templates/AboutSection';
import GoodsSection from '@/components/templates/GoodsSection';
import FAQSection from '@/components/templates/FAQSection';
import Header from '@/components/organisms/header/Header';
import useScroll from '@/hooks/useScroll';

const Home: NextPage = () => {
  const { isHeaderActive } = useScroll(900);
  const handleClicked = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    gtag.event({
      action: 'submit_form',
      category: 'contact',
      label: { test_label: 'eventTest' },
    });
  };
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
