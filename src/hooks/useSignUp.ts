import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ISignUp } from '../components/forms/SignUpForm/config';
import { api } from '../api';
import { authActions } from '../lib/redux/actions/auth';


export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((user:ISignUp) => {
        return api.singUp(user);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const  token  = mutation.data?.token;
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
