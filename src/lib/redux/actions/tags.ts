import { tagTypes } from '../types';

export const tagsActions = Object.freeze({
    setSelectedTagId: (selectedTagId:string) => {
        return {
            type:    tagTypes.SET_SELECTED_TAG_ID,
            payload: selectedTagId,
        };
    },
});
