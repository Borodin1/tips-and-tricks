import { ReactElement } from 'react';

type ContextType = string | undefined | null | boolean | ReactElement[];

export const fetchify = (isFetched:boolean, content:ContextType) => {
    if (!isFetched && !content) {
        return 'Загрузка...';
    }

    if (typeof content !== 'undefined') {
        return content;
    }

    return null;
};
