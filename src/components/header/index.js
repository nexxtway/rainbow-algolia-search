import React from 'react';
import {
    HeaderWrapper,
    HeaderContainer,
    LogoWrapper,
    Logo,
    TopActions,
    TopAction,
    MoonImg,
    SunImg,
    GitImg,
} from './styled';

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoWrapper>
                    <Logo src="assets/logo.svg" />
                </LogoWrapper>
                <TopActions>
                    <TopAction href="#">
                        <MoonImg />
                        <SunImg />
                    </TopAction>
                    <TopAction href="#">
                        <GitImg />
                    </TopAction>
                </TopActions>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
