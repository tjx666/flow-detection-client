import EventEmitter from 'eventemitter3';

class LoginEventEmitter extends EventEmitter {
    CHANGE_LOGIN_STATUS: string = 'change login status';

    constructor() {
        super();
    }

    login() {
        this.emit(this.CHANGE_LOGIN_STATUS, 'login');
    }

    logout() {
        this.emit(this.CHANGE_LOGIN_STATUS, 'logout');
    }
}

export const loginManager = new LoginEventEmitter();
