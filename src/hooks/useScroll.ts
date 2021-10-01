import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useScroll = (activePoint: number) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      const top = activePoint;
      let scroll = 0;
      scroll = window.scrollY;
      if (top <= scroll) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, [activePoint]);

  return { isHeaderActive };
};

export default useScroll;
