/* eslint-disable camelcase */
import React from 'react';
import ProgramItem from '../ProgramItem';

import * as S from './styled';

interface ProgramProps {
    title: string;
    description: string;
    duration_in_minutes: number;
    start_time: number;
    end_time: number;
    human_start_time_formatted: string;
    live_broadcast: boolean;
    media_id: number;
    program: {
        category: string;
    };
    custom_info: {
        siglaEmissora: string;
        URLPrograma: string;
        Graficos: {
            ImagemURL: string;
        };
    };
}

interface ProgramsListProps {
    programs: ProgramProps[];
}

const ProgramsList: React.FC<ProgramsListProps> = ({ programs }) => (
    <S.ProgramsWrapper>
        {programs.map(
            ({
                title,
                description,
                media_id,
                human_start_time_formatted,
                live_broadcast,
                custom_info: {
                    URLPrograma,
                    Graficos: { ImagemURL },
                },
            }) => (
                <ProgramItem
                    title={title}
                    description={description}
                    mediaId={media_id}
                    time={human_start_time_formatted}
                    urlProgram={URLPrograma}
                    urlImage={ImagemURL}
                    key={`${title}-${human_start_time_formatted}`}
                    live={live_broadcast}
                />
            ),
        )}
    </S.ProgramsWrapper>
);

export default ProgramsList;
