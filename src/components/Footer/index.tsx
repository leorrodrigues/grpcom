import React from 'react';

import RedeGlobo from '../RedeGlobo';

import * as S from './styled';

export const Footer: React.FC = () => (
    <S.FooterWrapper>
        <a href="https://redeglobo.globo.com/">
            <RedeGlobo size={40} />
        </a>
        <p>globo</p>
    </S.FooterWrapper>
);

export default Footer;
