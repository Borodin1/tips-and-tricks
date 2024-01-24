// Core
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { settingsActions } from '../lib/redux/actions/settings';
import { useAppDispatch } from '../lib/redux/init/store';
import { getIsSettingsOpen, getToken } from '../lib/redux/selectors';

// Instruments

// Icons
import { icons } from '../theme/icons/nav';
import { NavWrapper } from './styled/Nav.styles';

export const Nav: React.FC = () => {
    const dispatch = useAppDispatch();
    const isSettingsOpen = useSelector(getIsSettingsOpen);
    const token = useSelector(getToken);


    const handleClick = (event:SyntheticEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        dispatch(settingsActions.setSettingsOpen(true));
    };

    return (
        <NavWrapper>
            <h1 className = 'Типсы и Триксы'>T и T</h1>

            <NavLink to = '/all-topics'>
                <icons.Home /> Все темы
            </NavLink>
            <NavLink to = '/topic-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>
            <NavLink to = '/publish'>
                <icons.Publish /> Опубликовать
            </NavLink>
            { !token ? <NavLink to = '/login'>
                <icons.Bolt />Войти
            </NavLink> : <NavLink to = '/logout'>
                <icons.Bolt />Выйти
            </NavLink> }
            <NavLink to = '/profile'>
                <icons.Profile />Профиль
            </NavLink>
            <Link
                to = '/all-topics'
                className = { isSettingsOpen ? 'active' : '' }
                onClick = { handleClick }>
                <icons.Settings /> Настройки
            </Link>

        </NavWrapper>
    );
};
