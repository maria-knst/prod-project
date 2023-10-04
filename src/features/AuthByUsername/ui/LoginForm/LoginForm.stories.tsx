import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'ads' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'ads', error: 'error' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
