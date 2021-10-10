import React, { VFC } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
// icons
import { VscMenu, VscChevronDown, VscClose, VscTwitter } from 'react-icons/vsc';
import { FaYoutube, FaQuestion } from 'react-icons/fa';
import { GiPlayButton } from 'react-icons/gi';
import { RiHandHeartLine } from 'react-icons/ri';
import { IconType } from 'react-icons';
// conponents
import HeaderLinkLabel from '../../atoms/linkLabels/headerLinkLabel';
import HeaderTitle from '../../molecules/headerItems/headerTitle';
import styles from './header.module.scss';

type Service = {
  name: string;
  description: string;
  href: string;
  icon: IconType;
};

type MenuAction = {
  name: string;
  href: string;
  icon: IconType;
};

const services: Service[] = [
  {
    name: 'クイズ',
    description: '潤羽るしあちゃんについてのクイズです。',
    href: '#ComingSoon',
    icon: FaQuestion,
  },
  {
    name: 'るしあちゃんボタン',
    description: 'るしあちゃんボタンです。',
    href: '#ComingSoon',
    icon: GiPlayButton,
  },
  {
    name: 'るしあちゃんなでなで',
    description: 'るしあちゃん不足でなでなでしたいときに撫でられるサービスです。',
    href: '#ComingSoon',
    icon: RiHandHeartLine,
  },
];

const menuAction: MenuAction[] = [
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ',
    icon: FaYoutube,
  },
  { name: 'Twitter', href: 'https://twitter.com/uruharushia', icon: VscTwitter },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type headerProps = {
  isActive: boolean;
};

const Header: VFC<headerProps> = (props) => {
  const style = props.isActive ? styles.active : styles.notActive;

  return (
    <header className={style}>
      <Popover className="relative bg-white bg-opacity-75">
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6 mx-auto w-full">
              <div className="flex justify-between md:justify-start items-center py-6 md:space-x-10">
                <div className="flex lg:flex-1 justify-start lg:w-0">
                  <Link href="/">
                    <a>
                      <HeaderTitle />
                    </a>
                  </Link>
                </div>
                <div className="md:hidden -my-2 -mr-2">
                  <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-transparent hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                    <span className="sr-only">Open menu</span>
                    <VscMenu className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryItem',
                          )}
                        >
                          <span>サービス</span>
                          <VscChevronDown
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500',
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute lg:left-1/2 z-10 px-2 sm:px-0 mt-3 -ml-4 lg:ml-0 w-screen max-w-md transform lg:-translate-x-1/2"
                          >
                            <div className="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                              <div className="grid relative gap-6 sm:gap-8 sm:p-8 py-6 px-5 bg-white">
                                {services.map((item) => (
                                  <Link key={item.name} href={item.href}>
                                    <a className="flex items-start p-3 -m-3 hover:bg-gray-50 rounded-lg">
                                      <item.icon
                                        className="flex-shrink-0 w-6 h-6 text-primaryItem"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                              <div className="sm:flex py-5 px-5 sm:px-8 space-y-6 sm:space-y-0 sm:space-x-10 bg-gray-50">
                                {menuAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <Link key={item.name} href={item.href}>
                                      <a className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md">
                                        <item.icon
                                          className="flex-shrink-0 w-6 h-6 text-primaryItem"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-3">{item.name}</span>
                                      </a>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <HeaderLinkLabel href="#AboutSection" label="潤羽るしあとは" />
                  <HeaderLinkLabel href="#GoodsSection" label="グッズ紹介" />
                  <HeaderLinkLabel href="#FAQSection" label="Q & A" />
                  <HeaderLinkLabel href="/termsOfUse" label="利用規約" />
                </Popover.Group>
              </div>
            </div>

            <Transition
              show={open}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="md:hidden absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right"
              >
                <div className="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex justify-between items-center">
                      <HeaderTitle />
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                          <span className="sr-only">Close menu</span>
                          <VscClose className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {services.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md">
                              <item.icon
                                className="flex-shrink-0 w-6 h-6 text-primaryFont"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {item.name}
                              </span>
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <HeaderLinkLabel href="#AboutSection" label="潤羽るしあとは" />
                      <HeaderLinkLabel href="#GoodsSection" label="グッズ紹介" />
                      <HeaderLinkLabel href="#FAQSection" label="Q & A" />
                      <HeaderLinkLabel href="/termsOfUse" label="利用規約" />
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
};

export default Header;
