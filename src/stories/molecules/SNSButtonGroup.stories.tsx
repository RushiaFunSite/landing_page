import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SNSButtonGroup from '../../components/molecules/snsbuttongroup/SNSButtonGroup';

export default {
  title: 'Molecules/SNSButtonGroup',
  component: SNSButtonGroup,
  argTypes: {
    colorMode: { control: 'color' },
  },
} as ComponentMeta<typeof SNSButtonGroup>;

export const Template: ComponentStory<typeof SNSButtonGroup> = (args) => (
  <SNSButtonGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'SNS',
};
