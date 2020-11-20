/* eslint-disable camelcase */
import React from 'react';
import ImgFile from '../ImgFile';
import Tag from '../Tag';

import * as S from './styled';

interface ProgramItemProps {
    title: string;
    description: string;
    mediaId: number;
    time: string;
    urlProgram: string;
    urlImage: string;
    live: boolean;
}

const ProgramItem: React.FC<ProgramItemProps> = ({
    title,
    description,
    mediaId,
    time,
    urlProgram,
    urlImage,
    live,
}) => (
    <S.ProgramItemWrapper key={`${mediaId}-${title}-${time}`}>
        <a href={urlProgram}>
            <S.ProgramItemThumbWrapper>
                <ImgFile src={urlImage} alt={title} />
                {live && <Tag color="red" title="Ao Vivo" />}
            </S.ProgramItemThumbWrapper>
            <S.ProgramItemInfo>
                <S.ProgramItemHeader>
                    <S.ProgramItemDate>{time}</S.ProgramItemDate>
                    <S.ProgramItemTitle>{title}</S.ProgramItemTitle>
                </S.ProgramItemHeader>
                <S.ProgramItemDescription>
                    {description}
                </S.ProgramItemDescription>
            </S.ProgramItemInfo>
        </a>
    </S.ProgramItemWrapper>
);

export default ProgramItem;
