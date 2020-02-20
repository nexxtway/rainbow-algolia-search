import React from 'react';
import {
    Wrapper,
    LogoWrapper,
    Logo,
    TopActions,
    TopAction,
    MoonImg,
    SunImg,
    GitImg,
} from './styled';

const gitUrl = 'https://github.com/nexxtway/rainbow-algolia-search/';

const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo src="/assets/logo.svg" />
            </LogoWrapper>
            <TopActions>
                <TopAction href="#">
                    <MoonImg />
                    <SunImg />
                </TopAction>
                <TopAction href={gitUrl} target="_blank">
                    <GitImg />
                </TopAction>
            </TopActions>
        </Wrapper>
    );
};

export default Header;
