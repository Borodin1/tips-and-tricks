// Core

// Hooks
import { TipViewMode } from '../types/TipViewMode';
import {  useTags } from '../hooks';

// Helpers
import { getTagIcon, fetchify } from '../helpers';
import { TagWrapper } from './styled/Tags.styles';

type Props = {
    tipViewMode : TipViewMode
};

export const Tags:React.FC<Props> = ({ tipViewMode }) => {
    const {
        data, isFetched, selectedTagId, setSelectedTagId,
    } = useTags();
    const tagsJSX = Array.isArray(data) && data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        const handleClick = () => {
            setSelectedTagId(id);
        };

        return (
            <span
                key = { id }
                role = 'listItem'
                data-active = { selectedTagId === id || tipViewMode === 'all-topics' }
                className = 'tag'
                onClick = { handleClick }>
                <TagIcon />
                { name }
            </span>
        );
    });

    return (
        <TagWrapper >
            { fetchify(isFetched, tagsJSX) }
        </TagWrapper>
    );
};
