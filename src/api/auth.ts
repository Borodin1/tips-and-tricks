import axios, { AxiosResponse } from 'axios';
import { ISignUp } from '../components/forms/SignUpForm/config';
import { ILoginFormShape } from '../components/forms/types';
import { ILogin, ISignUpWithToken } from '../types/auth';

export const authApi = Object.freeze({
    async singUp(user:ISignUp):Promise<ISignUpWithToken> {
        const { data:newUser } = await axios.post<ISignUp, AxiosResponse<ISignUpWithToken>>(
            `${process.env.REACT_APP_API_URL}/auth/registration`,
            user,
        );


        return newUser;
    },
    async login(credentials:ILoginFormShape):Promise<ILogin> {
        const { email, password } = credentials;
        const { data } = await axios.get<ILogin>(
            `${process.env.REACT_APP_API_URL}/auth/login`,
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${email}:${password}`)}`,
                },
            },
        );

        return data;
    },
});
