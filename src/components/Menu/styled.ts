import styled, { css } from 'styled-components';

interface HeaderBurgerProps {
    open: boolean;
}

export const MenuLinksList = styled.ul`
    z-index: 100;
    position: fixed;
    right: 50%;
    top: 50%;

    color: black;

    transform: translate(50%, -50%);

    font-display: 1.5rem;
    font-weight: 300;
`;

export const MenuLinksItem = styled.li`
    & + & {
        margin-top: 15px;
    }
`;

export const MenuLinksLink = styled.a`
    text-transform: capitalize;

    color: #08080c;
    text-decoration: none;
    font-weight: 600;
    font-size: 3rem;
    transition: opacity 0.5s;

    & + a {
        margin-left: 32px;
    }
    &:hover {
        opacity: 0.5;
        &::after {
            width: 100%;
        }
    }
`;

export const HeaderBurger = styled.div<HeaderBurgerProps>`
    z-index: 100;
    width: 40px;
    height: 38px;
    margin: 0 28px 0 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: static;

    cursor: pointer;
    right: 0;

    &:hover {
        transform: scale3d(1.1, 1.1, 1);
    }
    ${({ open }) =>
        open &&
        css`
            position: fixed;
            margin-right: 38px;
        `}

    p {
        z-index: 100;
        width: 40px;
        height: 4px;
        background: #fff;
        border-radius: 2px;
        transform-origin: left center;
        transition: all 0.5s ease;

        &:first-of-type {
            ${({ open }) =>
                open &&
                css`
                    transform: rotate(43deg) translate3d(-2px, -1px, 0)
                        scaleX(1.37);
                    background: #000;
                `}
        }

        &:nth-of-type(2) {
            width: 25px;

            ${({ open }) =>
                open &&
                css`
                    display: none;
                `}
        }

        &:last-of-type {
            ${({ open }) =>
                open &&
                css`
                    transform: rotate(-42deg) translate3d(-2px, 1px, 0)
                        scaleX(1.37);
                    background: #000;
                `}
        }
    }
`;

export const MenuBlur = styled.div`
    z-index: 99;

    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;

    cursor: auto;

    backdrop-filter: blur(3.5rem);
`;
