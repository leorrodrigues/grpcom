import React from 'react';

import Menu from '../Menu';

import RedeGlobo from '../RedeGlobo';

import * as S from './styled';

export const Header: React.FC = () => (
    <S.HeaderWrapper>
        <a href="https://redeglobo.globo.com/">
            <RedeGlobo size={72} />
        </a>
        <S.LinkWrapper to="/">
            <strong>RPC</strong>
        </S.LinkWrapper>
        <Menu />
    </S.HeaderWrapper>
);

export default Header;
