/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaTwitter, FaFacebook, FaReddit } from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SNSButton, { SNSProps } from '../../components/atoms/buttons/snsbutton/SNSButton';

export default {
    title: 'Atomics/SNSButton',
    component: SNSButton,
    subcomponents: { FaTwitter, FaFacebook, FaReddit },
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

export const Facebook = (args: SNSProps) => (
    <SNSButton sns="facebook">
        <FaFacebook color={args.colorMode} />
    </SNSButton>
);

export const Line = (args: SNSProps) => (
    <SNSButton sns="line">
        <img alt="line" src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" />
    </SNSButton>
);

export const Reddit = (args: SNSProps) => (
    <SNSButton sns="reddit">
        <FaReddit color={args.colorMode} />
    </SNSButton>
);
