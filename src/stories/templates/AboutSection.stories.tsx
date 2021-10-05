import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AboutSection from '../../components/templates/AboutSection';

export default {
  title: 'Template/AboutSection',
  component: AboutSection,
} as ComponentMeta<typeof AboutSection>;

export const Template: ComponentStory<typeof AboutSection> = () => <AboutSection />;
