import React, { useState } from 'react';

import links from './content';

import * as S from './styled';

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <S.HeaderBurger
                open={isOpen}
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <p />
                <p />
                <p />
            </S.HeaderBurger>
            {isOpen && (
                <>
                    <S.MenuBlur />
                    <S.MenuLinksList>
                        {links.map((link) => (
                            <S.MenuLinksItem key={link.label}>
                                <S.MenuLinksLink href={link.url}>
                                    {link.label}
                                </S.MenuLinksLink>
                            </S.MenuLinksItem>
                        ))}
                    </S.MenuLinksList>
                </>
            )}
        </>
    );
};

export default Menu;
