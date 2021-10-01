import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../../components/organisms/header/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = () => <Header />;
