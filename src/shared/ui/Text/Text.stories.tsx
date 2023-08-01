import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { OutlineDark } from 'shared/ui/Button/Button.stories';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is Title',
    text: 'Long text long text long text long text long text ',
};

export const Error = Template.bind({});
Error.args = {
    title: 'This is Title',
    text: 'Long text long text long text long text long text ',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'This is Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Long text long text long text long text long text ',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'This is Title',
    text: 'Long text long text long text long text long text ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'This is Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Long text long text long text long text long text ',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
