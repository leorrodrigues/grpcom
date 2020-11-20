/* eslint-disable camelcase */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { addDays, format, fromUnixTime, subDays, subHours } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { formatToTimeZone } from 'date-fns-timezone';

import api from '../../services/api';

import * as S from './styled';
import ProgramsList from '../../components/ProgramsList';
import HighlightProgram from '../../components/HighlightProgram';
import DatePicker from '../../components/DatePicker';

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

const Dashboard: React.FC = () => {
    const channelId = 1337;
    const currentDate = useMemo(() => new Date(), []);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [programs, setPrograms] = useState([] as ProgramProps[]);
    const [
        highlightProgram,
        setHighlightProgram,
    ] = useState<ProgramProps | null>(null);

    const selectDateFormatted = useMemo(() => {
        return format(selectedDate, `EEE, dd' DE 'MMMM'`, { locale: ptBR });
    }, [selectedDate]);

    useEffect(() => {
        async function getProgramsSchedule(): Promise<void> {
            try {
                const response = await api.get(`${channelId}`, {
                    params: {
                        date: format(selectedDate, 'yyyy-MM-dd'),
                    },
                });

                const { data } = response;
                const { entries } = data.programme;
                const formattedEntries = entries.map((entry: ProgramProps) => {
                    return {
                        ...entry,
                        human_start_time_formatted: formatToTimeZone(
                            subHours(fromUnixTime(entry.start_time), 3),
                            'HH:mm',
                            {
                                timeZone: 'Etc/UTC',
                            },
                        ),
                    };
                });

                const sortedEntriesByTime = formattedEntries.sort(
                    (a: ProgramProps, b: ProgramProps) =>
                        a.human_start_time_formatted <
                        b.human_start_time_formatted
                            ? -1
                            : 1,
                );
                setPrograms(() => sortedEntriesByTime);
            } catch (e) {
                setPrograms(() => []);
            }
        }
        getProgramsSchedule();
    }, [selectedDate]);

    const previousDay = useCallback(() => {
        setSelectedDate((oldDate) => subDays(oldDate, 1));
    }, []);

    const nextDay = useCallback(() => {
        setSelectedDate((oldDate) => addDays(oldDate, 1));
    }, []);

    useEffect(() => {
        const unixCurrentDate = currentDate.getTime() / 1000;
        const selectedProgram = programs.filter(({ start_time, end_time }) => {
            return start_time < unixCurrentDate && unixCurrentDate < end_time;
        });
        selectedProgram && setHighlightProgram(() => selectedProgram[0]);
    }, [currentDate, programs]);

    return (
        <S.ContainerWrapper>
            {highlightProgram && (
                <HighlightProgram program={highlightProgram} />
            )}
            <DatePicker
                date={selectDateFormatted}
                previousDay={previousDay}
                nextDay={nextDay}
            />

            {programs.length ? (
                <ProgramsList programs={programs} />
            ) : (
                <S.NoProgramsWrapper>
                    <p>Aguardando nova Programação</p>
                </S.NoProgramsWrapper>
            )}
        </S.ContainerWrapper>
    );
};

export default Dashboard;
