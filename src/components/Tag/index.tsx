import React from 'react';

import * as S from './styled';

interface TagProps {
    color: string;
    title: string;
}

const Tag: React.FC<TagProps> = ({ color, title }) => (
    <S.TagWrapper color={color}>
        <p>{title}</p>
    </S.TagWrapper>
);

export default Tag;
