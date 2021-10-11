import Layout from '@/layout/layout';
import type { NextPage } from 'next';
import MainSection from '@/components/templates/MainSection';
import AboutSection from '@/components/templates/AboutSection';
import GoodsSection from '@/components/templates/GoodsSection';
import FAQSection from '@/components/templates/FAQSection';
import Header from '@/components/organisms/header/Header';
import useScroll from '@/hooks/useScroll';
import useConsoleMessage from '@/hooks/useConsoleMessage';
import useActiveSNSShare from '@/hooks/useActiveSNSShare';
import SNSButtonGroup from '@/components/molecules/snsbuttongroup/SNSButtonGroup';
import Styles from './index.module.scss';
// import { useEffect, useState } from 'react';

const Home: NextPage = () => {
    const { isHeaderActive } = useScroll(900);
    // コンソールログにメッセージ
    useConsoleMessage();
    const { active } = useActiveSNSShare('#MainSection');
    const style = active ? Styles.fadein : Styles.fadeout;

    return (
        <Layout>
            <aside className={[Styles.snsShare, style].join(' ')}>
                <SNSButtonGroup label="SNS Share" />
            </aside>
            <div className={Styles.stickyHeader}>
                <div className={Styles.stickyHeader__layout}>
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
