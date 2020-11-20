import styled from 'styled-components';

export const HighlightProgramWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 220px;

    padding: 24px;
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
`;

export const HighlightProgramThumbWrapper = styled.div`
    position: relative;
    min-width: 300px;
    max-width: 1000px;
    min-height: auto;
`;

export const HighlightProgramTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const HighlightProgramDescription = styled.p`
    margin: 20px 0;

    font-size: 2rem;
    font-weight: 500;
    max-width: 1000px;
`;
