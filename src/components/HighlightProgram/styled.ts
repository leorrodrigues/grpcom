import styled from 'styled-components';
import media from 'styled-media-query';

export const HighlightProgramWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 220px;
    padding: 18px;
    margin-bottom: 10px;
    border-bottom: 1px solid #c8c8c8;

    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            opacity: 0.8;
        }

        transition: opacity 0.5s;
    }

    ${media.lessThan('huge')`
        margin-top: 180px;
    `}

    ${media.lessThan('small')`
        margin-top: 160px;
    `}
`;

export const HighlightProgramThumbWrapper = styled.div`
    position: relative;
    min-width: 300px;
    max-width: 1000px;
    min-height: auto;

    ${media.lessThan('huge')`
        max-width: 800px;
    `}
`;

export const HighlightProgramTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 14px;

    ${media.lessThan('huge')`
        font-size: 2rem;
    `}

    ${media.lessThan('small')`
        font-size: 1.6rem;
    `}
`;

export const HighlightProgramDescription = styled.p`
    margin: 20px 0;

    font-size: 1.8rem;
    font-weight: 500;
    max-width: 1000px;

    ${media.lessThan('huge')`
        font-size: 1.6rem;
    `}

    ${media.lessThan('large')`
        font-size: 1.4rem;
    `}

    ${media.lessThan('medium')`
        font-size: 1.3rem;
    `}

    ${media.lessThan('small')`
        font-size: 1.1rem;
    `}
`;
