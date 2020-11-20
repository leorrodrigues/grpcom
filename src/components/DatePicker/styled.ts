import styled from 'styled-components';

export const DateWrapper = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    margin-top: 94px;
    z-index: 80;
    background: #f9f9f9;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    border-bottom: 1px solid #c8c8c8;

    /* height: 100px; */

    strong {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2.5rem;
        margin: 28px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        background: transparent;
        border: 0;
    }
`;
