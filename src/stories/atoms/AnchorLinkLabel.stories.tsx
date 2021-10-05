import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AnchorLinkLabel from '../../components/atoms/linkLabels/anchorLinkLabel';

export default {
  title: 'Atomics/AnchorLinkLabel',
  component: AnchorLinkLabel,
} as ComponentMeta<typeof AnchorLinkLabel>;

const Template: ComponentStory<typeof AnchorLinkLabel> = (args) => <AnchorLinkLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: '/',
  label: 'トップページはこちら',
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: '/termsOfUse',
  label: '利用規約',
};
