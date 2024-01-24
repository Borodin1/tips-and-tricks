import { makeAutoObservable } from 'mobx';

class AuthStore {
    message = '';
    authToken = null;
    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    resetError = () => {
        this.message = '';
    };

    get errorMessage() {
        return this.message;
    }


    setError(newMessageError) {
        this.message = newMessageError;
    }

    setToken(newToken) {
        this.authToken = newToken;
    }

    get token() {
        return this.authToken;
    }
}

export { AuthStore };
