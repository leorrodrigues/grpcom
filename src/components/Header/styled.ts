import styled from 'styled-components';

import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 90;

    background-color: #006497;

    a {
        &:hover {
            opacity: 0.3;
        }
        transition: opacity 0.4s ease;

        svg {
            margin: 6px;

            ${media.lessThan('huge')`
                width: 60px;
            `}

            ${media.lessThan('small')`
                width: 40px;
            `}
        }
    }
`;

export const LinkWrapper = styled(Link)`
    text-decoration: none;

    transition: opacity 0.4s ease;
    &:hover {
        opacity: 0.3;
    }

    strong {
        font-size: 4rem;
        color: #fff;

        ${media.lessThan('huge')`
            font-size: 3rem;
        `}

        ${media.lessThan('small')`
            font-size: 2rem;
        `}
    }
`;
