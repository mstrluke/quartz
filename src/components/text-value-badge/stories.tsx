import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TextValueBadge, Props } from './TextValueBadge';

export default {
  title: 'Quartz/Badges/TextValueBadge',
  component: TextValueBadge,
  args: {
    text: 'text',
    value: 'value',
  },
};

const Template: Story<Props> = (props) => <TextValueBadge {...props} />;

export const Default = Template.bind({});
