import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GoodsSection from '../../components/templates/GoodsSection';

export default {
  title: 'Template/GoodsSection',
  component: GoodsSection,
} as ComponentMeta<typeof GoodsSection>;

export const Template: ComponentStory<typeof GoodsSection> = () => <GoodsSection />;
