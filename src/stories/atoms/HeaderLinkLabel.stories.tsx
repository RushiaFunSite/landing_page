import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderLinkLabel from '../../components/atoms/linkLabels/headerLinkLabel';

export default {
  title: 'Atomics/HeaderLinkLabel',
  component: HeaderLinkLabel,
} as ComponentMeta<typeof HeaderLinkLabel>;

const Template: ComponentStory<typeof HeaderLinkLabel> = (args) => <HeaderLinkLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: '/contact',
  label: 'お問い合わせ',
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: '/news',
  label: 'お知らせ',
};
