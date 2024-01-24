import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastsOptions } from '../constant/toastOptions';
import { authActions } from '../lib/redux/actions/auth';
import { getErrorMessage } from '../lib/redux/selectors/auth';

export const useErrorMessage = () => {
    const errorMessage = useSelector(getErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastsOptions);
            dispatch(authActions.resetError());
        }
    }, [errorMessage]);
};
