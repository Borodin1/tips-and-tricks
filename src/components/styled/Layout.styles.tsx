import styled from 'styled-components';

export const LayoutWrapper = styled.section`
    --side-space: 70px;

    display: grid;
    grid-template-areas:
        'menu hero'
        'menu content';
    grid-template-columns: var(--nav-width) calc(100vw - var(--nav-width));
    justify-items: center;
    padding-top: 24px;
    padding-bottom: 24px;

    @media screen and (max-width: 1024px) {
        display: block;
        padding-top: 155px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 110px;
    }
`;
