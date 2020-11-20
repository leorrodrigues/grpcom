import React from 'react';

import GlobalStyles from '../../styles/global';
import Footer from '../Footer';
import Header from '../Header';

import * as S from './styled';

interface Props {
    children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />
            <Header />
            <S.LayoutMain>{children}</S.LayoutMain>
            <Footer />
        </S.LayoutWrapper>
    );
};

export default Layout;
