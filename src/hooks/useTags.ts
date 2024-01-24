// Core
import {  useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

// Instruments
import { api } from '../api';
import { tagsActions } from '../lib/redux/actions/tags';
import { getSelectedTagId } from '../lib/redux/selectors/tags';

export const useTags = () => {
    const dispatch = useDispatch();
    const selectedTagId = useSelector(getSelectedTagId);
    const query = useQuery('tags', api.getTags);
    const { data, isFetched, isSuccess } = query;

    const setSelectedTagId = (id:string) => {
        dispatch(tagsActions.setSelectedTagId(id));
    };

    useEffect(() => {
        if (!selectedTagId && query.data) {
            setSelectedTagId(query.data?.id);
        }
    }, [query.data]);

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
        isSuccess,
        setSelectedTagId,
        selectedTagId,
    };
};

