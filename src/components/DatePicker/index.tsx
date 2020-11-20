import React from 'react';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import * as S from './styled';

interface DatePickerProps {
    date: string;
    previousDay: () => void;
    nextDay: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
    date,
    previousDay,
    nextDay,
}) => {
    return (
        <S.DateWrapper>
            <button type="button" onClick={() => previousDay()}>
                <RiArrowLeftSLine color="#006597" size={80} />
            </button>
            <strong>{date}</strong>
            <button type="button" onClick={() => nextDay()}>
                <RiArrowRightSLine color="#006597" size={80} />
            </button>
        </S.DateWrapper>
    );
};

export default DatePicker;
