import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainSection from '../../components/templates/MainSection';

export default {
  title: 'Template/MainSection',
  component: MainSection,
} as ComponentMeta<typeof MainSection>;

export const Template: ComponentStory<typeof MainSection> = () => <MainSection />;
