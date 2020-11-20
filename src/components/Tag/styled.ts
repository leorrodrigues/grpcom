import styled from 'styled-components';
import media from 'styled-media-query';

export const TagWrapper = styled.div`
    position: absolute;

    top: 0px;
    float: left;
    background: ${(props) => props.color};
    padding: 10px;

    border-radius: 50px;

    p {
        color: #f0f0f0;
        font-weight: 700;
        font-size: 1.5rem;

        ${media.lessThan('small')`
            font-size: 1rem;
        `}
    }
`;
