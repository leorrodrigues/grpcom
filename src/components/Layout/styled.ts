import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

export const LayoutMain = styled.main`
    min-height: 100vh;
    padding: 0 10rem;

    width: 100%;

    ${media.lessThan('huge')`
        padding: 0 4rem;
    `}

    ${media.lessThan('large')`
        padding: 0 3rem;
    `}

    ${media.lessThan('medium')`
        padding: 0;
    `}
`;
