import { useEffect, useState } from 'react';

const useActiveSNSShare = (query: string) => {
    const [active, setActive] = useState(true);
    useEffect(() => {
        const targets: NodeListOf<Element> = document.querySelectorAll(query);
        /** options
         * root ルート（交差判定のベース）となる要素。デフォルトではviewport。
         * rootMargin rootからのマージンを指定する。マージンを指定することで、rootと交差する前に発火させることができます。単位はpxか%である必要があります。デフォルトは’0px 0px 0px 0px’です。
         * threshold 闘値。0はほんの少しでもrootに入ってきたとき、1にすると、完全にrootに入ってきたときのことを示します。
         */
        const options: IntersectionObserverInit = {
            root: null, // 今回はビューポートをルート要素とする
            rootMargin: '5%', // ビューポートの中心を判定基準にする ex. -50% 0px
            threshold: [0.9, 1],
        };
        const observer: IntersectionObserver = new IntersectionObserver(callback, options);

        // それぞれのtargetを監視する
        targets.forEach((target: Element) => {
            observer.observe(target);
        });

        function callback(entries: IntersectionObserverEntry[], _observer: IntersectionObserver) {
            entries.forEach((entry) => {
                if (entry.intersectionRatio === 1) {
                    // 100%見えなくなったとき
                    setActive(true);
                } else if (entry.intersectionRatio === 0) {
                    setActive(true);
                } else if (!entry.isIntersecting) {
                    // 見えている領域が90%を下回ったとき
                    setActive(false);
                }
            });
        }
    }, [query]);

    return { active };
};

export default useActiveSNSShare;
