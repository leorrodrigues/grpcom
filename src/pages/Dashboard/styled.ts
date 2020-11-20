import styled from 'styled-components';
import media from 'styled-media-query';

export const ContainerWrapper = styled.div`
    margin-top: 200px;

    ${media.lessThan('huge')`
        margin-top: 180px;
    `}

    ${media.lessThan('small')`
        margin-top: 160px;
    `}
`;

export const NoProgramsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;

    margin-top: 50vh;
    font-size: 3.5rem;
    font-weight: 600;

    ${media.lessThan('large')`
        font-size: 3rem;
    `}

    ${media.lessThan('small')`
        font-size: 2.5rem;
    `}
`;
