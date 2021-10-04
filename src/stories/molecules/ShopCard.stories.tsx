import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShopCard from '../../components/molecules/shopcard/ShopCard';

export default {
  title: 'Molecules/ShopCard',
  component: ShopCard,
} as ComponentMeta<typeof ShopCard>;

const Template: ComponentStory<typeof ShopCard> = (args) => <ShopCard {...args} />;

export const Booth = Template.bind({});
Booth.args = {
  shopImage: 'booth',
  shopCategory: '公式',
  shopName: 'booth',
  shopLinkText: 'https://hololive.booth.pm/',
};

export const HololiveShop = Template.bind({});
HololiveShop.args = {
  shopCategory: '公式',
  shopImage: 'hololivestore',
  shopName: 'ホロライブ公式ショップ',
  shopLinkText: 'https://shop.hololivepro.com/',
};
