import * as React from 'react';
import { loginManager } from '../events/LoginEvents';

export const useLoginStatus = (): boolean => {
    const [isLogin, setLoginStatus] = React.useState<boolean>(false);
    const handleChangeLoginStatus = (status: boolean) => {
        setLoginStatus(status);
    };

    React.useEffect(() => {
        loginManager.on(loginManager.CHANGE_LOGIN_STATUS, handleChangeLoginStatus);

        return () => {
            loginManager.off(loginManager.CHANGE_LOGIN_STATUS, handleChangeLoginStatus);
        };
    }, []);

    return isLogin;
};
