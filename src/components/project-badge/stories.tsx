import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ProjectBadge, Props } from './ProjectBadge';

export default {
  title: 'Quartz/Badges/ProjectBadge',
  component: ProjectBadge,
  args: {
    value: 'ml demo web',
  },
};

const Template: Story<Props> = (props) => <ProjectBadge {...props} />;

export const Default = Template.bind({});
