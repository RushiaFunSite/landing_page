import { VFC } from 'react';
const Footer: VFC = () => {
  return (
    <div>
      <footer id="footer" className="relative z-50 dark:bg-gray-900">
        <div className="flex flex-col justify-center items-center py-16 border-t border-b border-gray-200">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            2021 Riml, Ⓒ 2016 COVER Corp.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
