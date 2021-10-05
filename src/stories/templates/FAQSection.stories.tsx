import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FAQSection from '../../components/templates/FAQSection';

export default {
  title: 'Template/FAQSection',
  component: FAQSection,
} as ComponentMeta<typeof FAQSection>;

export const Template: ComponentStory<typeof FAQSection> = () => <FAQSection />;
