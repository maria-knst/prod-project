import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('Test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Banan' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('Ananas'),
        )).toEqual({ username: 'Ananas' });
    });

    test('Test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '8888' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('9999'),
        )).toEqual({ password: '9999' });
    });
});
