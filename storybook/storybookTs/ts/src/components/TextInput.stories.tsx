import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from './TextInput';

export default {
  title: 'Example/TextInput',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 30,
  value: 'TextInput',
};
