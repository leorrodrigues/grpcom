import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 90;
    padding: 10px;

    background-color: #006497;

    span {
        width: 1px;
        height: 48px;
        background: #fff;
    }

    a {
        &:hover {
            opacity: 0.3;
        }
        transition: opacity 0.4s ease;
    }
`;

export const LinkWrapper = styled(Link)`
    text-decoration: none;

    transition: opacity 0.4s ease;
    &:hover {
        opacity: 0.3;
    }

    strong {
        font-size: 48px;
        color: #fff;
    }
`;
