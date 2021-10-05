import React from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SNSButton, { SNSProps } from '../../components/atoms/buttons/snsbutton/SNSButton';

export default {
  title: 'Atomics/SNSButton',
  component: SNSButton,
  subcomponents: { FaTwitter, FaYoutube },
  argTypes: {
    colorMode: { control: 'color' },
  },
} as ComponentMeta<typeof SNSButton>;

export const Template: ComponentStory<typeof SNSButton> = (args) => <SNSButton {...args} />;

export const Primary = (args: JSX.IntrinsicAttributes & SNSProps) => (
  <SNSButton {...args}>
    <FaTwitter color={args.colorMode} />
  </SNSButton>
);

export const Twitter = (args: SNSProps) => (
  <SNSButton sns="twitter">
    <FaTwitter color={args.colorMode} />
  </SNSButton>
);

export const Youtube = (args: SNSProps) => (
  <SNSButton sns="youtube">
    <FaYoutube color={args.colorMode} />
  </SNSButton>
);
