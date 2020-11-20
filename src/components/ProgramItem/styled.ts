import styled from 'styled-components';
import media from 'styled-media-query';

export const ProgramItemWrapper = styled.div`
    & + & {
        margin-top: 20px;
        padding-top: 40px;
        border-top: 1px solid #c8c8c8;
    }

    a {
        display: flex;
        text-decoration: none;
        color: inherit;

        &:hover {
            opacity: 0.8;
        }

        transition: opacity 0.5s;

        ${media.lessThan('large')`
            flex-direction: column;
        `}
    }
`;

export const ProgramItemThumbWrapper = styled.div`
    position: relative;
    max-width: 600px;
    min-height: auto;

    img {
        max-width: 600px;
        width: auto;
        height: auto;

        ${media.lessThan('medium')`
            max-width: 450px;
        `}

        ${media.lessThan('small')`
            max-width: 280px;
        `}
    }
`;

export const ProgramItemLive = styled.div`
    position: absolute;

    top: 0px;
    float: left;
    height: 40px;
    padding: 10px;

    border-radius: 50px;

    p {
        color: #f0f0f0;
        font-weight: 700;
        font-size: 1.5rem;
    }
`;

export const ProgramItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
`;

export const ProgramItemHeader = styled.div`
    display: flex;

    align-items: center;

    margin-top: 10px;

    ${media.lessThan('huge')`
        flex-direction: column;
        align-items: flex-start;
    `}

    ${media.between('medium', 'large')`
        flex-direction: row;
        align-items: center;
    `}
`;

export const ProgramItemTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0.2rem 0 0.5rem;

    ${media.lessThan('small')`
        font-size: 1.3rem;
    `}
`;

export const ProgramItemDescription = styled.p`
    margin-top: 24px;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.2;

    ${media.lessThan('huge')`
        margin-top: 10px;
        font-size: 1.6rem;
    `}

    ${media.lessThan('large')`
        margin-top: 8px;
        font-size: 1.4rem;
    `}

    ${media.lessThan('medium')`
        margin-top: 6px;
        font-size: 1.3rem;
    `}

    ${media.lessThan('small')`
        margin-top: 4px;
        font-size: 1.1rem;
    `}
`;

export const ProgramItemThumb = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    width: auto;
    height: auto;

    object-fit: cover;
`;

export const ProgramItemDate = styled.time`
    font-size: 1.5rem;
    margin-right: 14px;
    font-weight: 500;

    ${media.lessThan('small')`
        font-size: 1.2rem;
    `}
`;
