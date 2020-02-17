import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 43px;
    padding-top: 24px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1393px;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;
`;

const LogoWrapper = styled.div`
    display: inline-block;
`;

const Logo = styled.img`
    width: 48px;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;

    @media screen and (max-width: 767px) {
        .logo {
            width: 38px;
        }
    }
`;

const TopActions = styled.div`
    display: inline-block;
`;

const TopAction = styled.a`
    display: inline-block;
    margin-left: 36px;

    @media screen and (max-width: 767px) {
        .top-action {
            margin-left: 26px;
        }
    }
`;

const MoonImg = styled.img`
    width: 32px;
    height: 32px;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
`;

const SunImg = styled.img`
    display: none;
    width: 32px;
    height: 32px;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
`;

const GitImg = styled.img`
    width: 32px;
    height: 32px;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    border-radius: 50%;
    background-color: #061c3f;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoWrapper>
                    <Logo src="img/logo.svg" />
                </LogoWrapper>
                <TopActions>
                    <TopAction href="#">
                        <MoonImg src="img/icons/night.svg" />
                        <SunImg src="img/icons/sun-black-shape.svg" />
                    </TopAction>
                    <TopAction href="#">
                        <GitImg src="img/icons/github.svg" />
                    </TopAction>
                </TopActions>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
