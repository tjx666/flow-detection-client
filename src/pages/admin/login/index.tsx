import * as React from 'react';
import { WrappedLoginForm } from '../../../components';
import './style.scss';

export const Login = React.memo(() => {
    return (
        <div className="admin-login">
            <span className="admin-login-title">智行-智慧城市出行</span>
            <h2>用户登录界面</h2>
            <WrappedLoginForm />
        </div>
    );
});
