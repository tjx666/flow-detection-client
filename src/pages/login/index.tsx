import * as React from 'react';
import { WrappedLoginForm } from '../../components';
import './style.scss';

export const Login = React.memo(() => {
    return (
        <div className="login">
            <span className="login-title">登入</span>
            <WrappedLoginForm />
        </div>
    );
});