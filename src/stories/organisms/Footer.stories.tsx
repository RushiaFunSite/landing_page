import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '../../components/organisms/footer/Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Template: ComponentStory<typeof Footer> = () => <Footer />;
