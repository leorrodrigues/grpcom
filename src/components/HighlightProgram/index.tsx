/* eslint-disable camelcase */
import React from 'react';
import ImgFile from '../ImgFile';
import Tag from '../Tag';

import * as S from './styled';

interface HighlightProgramProps {
    program: {
        title: string;
        description: string;
        custom_info: {
            URLPrograma: string;
            Graficos: {
                ImagemURL: string;
            };
        };
    };
}

const HighlightProgram: React.FC<HighlightProgramProps> = ({
    program: {
        title,
        description,
        custom_info: {
            URLPrograma,
            Graficos: { ImagemURL },
        },
    },
}) => (
    <S.HighlightProgramWrapper>
        <a href={URLPrograma}>
            <S.HighlightProgramTitle>{title}</S.HighlightProgramTitle>
            <S.HighlightProgramThumbWrapper>
                <ImgFile src={ImagemURL} alt={title} />
                <Tag color="black" title="Assista Agora" />
            </S.HighlightProgramThumbWrapper>
            <S.HighlightProgramDescription>
                {description}
            </S.HighlightProgramDescription>
        </a>
    </S.HighlightProgramWrapper>
);

export default HighlightProgram;
