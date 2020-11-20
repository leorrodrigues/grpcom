import styled from 'styled-components';
import media from 'styled-media-query';

export const DateWrapper = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    margin-top: 86px;
    z-index: 80;
    background: #f9f9f9;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #c8c8c8;

    ${media.lessThan('huge')`
        margin-top: 86px;
    `}

    strong {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2.5rem;
        margin: 28px;

        ${media.lessThan('huge')`
            font-size: 1.8rem;
        `}

        ${media.lessThan('small')`
            font-size: 1.2rem;
        `}
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        background: transparent;
        border: 0;

        svg {
            ${media.lessThan('small')`
                width: 40px;
            `}
        }
    }
`;
