import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../../components/organisms/header/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {
    isActive: { control: 'boolean' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};

export const NoActive = Template.bind({});
NoActive.args = {
  isActive: false,
};
