import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { ILoginFormShape } from '../components/forms/types';
import { api } from '../api';
import { authActions } from '../lib/redux/actions/auth';


export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials:ILoginFormShape) => {
        return api.login(credentials);
    }, {
        onError(error:AxiosError) {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(authActions.setError('Неверный логин или пароль. Проверьте корректность введеных данных'));
            } else {
                dispatch(authActions.setError('Ошибка запроса. Повторите попытку через несколько минут или обратитесь к администратору.'));
            }
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const  data  = mutation.data?.data;
            dispatch(authActions.setToken(data));
            localStorage.setItem('token', data);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
