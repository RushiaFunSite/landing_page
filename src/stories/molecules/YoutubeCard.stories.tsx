import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import YoutubeCard from '../../components/molecules/youtubecard/YoutubeCard';

export default {
  title: 'Molecules/YoutubeCard',
  component: YoutubeCard,
} as ComponentMeta<typeof YoutubeCard>;

const Template: ComponentStory<typeof YoutubeCard> = (args) => <YoutubeCard {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  title: '潤羽るしあ初配信',
  link: 'https://www.youtube-nocookie.com/embed/xqsOegkgDAc',
};
