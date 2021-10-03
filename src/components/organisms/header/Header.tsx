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
import useFetchHeaderItem from '../../../hooks/useFetchHeaderItem';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type headerProps = {
  isActive: boolean;
};

const Header: VFC<headerProps> = (props) => {
  const { data } = useFetchHeaderItem();
  const headerItems = data?.headerData.headerItems;
  // service
  const service = data?.headerData.services;
  const serviceIcon = [{ icon: FaQuestion }, { icon: GiPlayButton }, { icon: RiHandHeartLine }];
  const serviceItems: {
    icon: IconType;
    serviceName: string;
    description: string;
    href: string;
    isRunning: boolean;
  }[] = [];
  service?.[0].serviceItems?.map((item, index) => {
    serviceItems.push({ ...item, ...serviceIcon[index] });
  });

  // menuAction
  const menuActions = data?.headerData.menuActions;
  const menuActionIcon = [{ icon: FaYoutube }, { icon: VscTwitter }];
  const menuItems: { icon: IconType; actionName: string; href: string }[] = [];
  menuActions?.map((item, index) => {
    menuItems.push({ ...item, ...menuActionIcon[index] });
  });

  const style = props.isActive ? styles.active : styles.notActive;

  return (
    <header className={style}>
      <Popover className="relative bg-white bg-opacity-75">
        {({ open }) => (
          <>
            <div className="w-full mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <a>
                      <HeaderTitle />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                    <span className="sr-only">Open menu</span>
                    <VscMenu className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400',
                          )}
                        >
                          <span>{service?.[0].serviceLabel}</span>
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
                            className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 z-10"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {serviceItems.map((item) =>
                                  item.isRunning ? (
                                    <Link key={item.serviceName} href={item.href}>
                                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                        <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-green-400"
                                          aria-hidden="true"
                                        />
                                        <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">
                                            {item.serviceName}
                                          </p>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {item.description}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  ) : (
                                    ''
                                  ),
                                )}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                {menuItems.map((item) => (
                                  <div key={item.actionName} className="flow-root">
                                    <Link key={item.actionName} href={item.href}>
                                      <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                        <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-green-400"
                                          aria-hidden="true"
                                        />
                                        <span className="ml-3">{item.actionName}</span>
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
                  {headerItems?.map((item) => {
                    return (
                      <HeaderLinkLabel
                        key={item.headerLabel}
                        href={item.href}
                        label={item.headerLabel}
                      />
                    );
                  })}
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
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <HeaderTitle />
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                          <span className="sr-only">Close menu</span>
                          <VscClose className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {serviceItems.map((item) =>
                          item.isRunning ? (
                            <Link key={item.serviceName} href={item.href}>
                              <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-green-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium text-gray-900">
                                  {item.serviceName}
                                </span>
                              </a>
                            </Link>
                          ) : (
                            ''
                          ),
                        )}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {headerItems?.map((item) => {
                        return (
                          <HeaderLinkLabel
                            key={item.headerLabel}
                            href={item.href}
                            label={item.headerLabel}
                          />
                        );
                      })}
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
