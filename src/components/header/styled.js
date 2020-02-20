import styled from 'styled-components';
import { MoonIcon, SunIcon, GitIcon } from '../icons';

export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto 43px auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1393px;
    padding: 43px 20px 0 20px;
    justify-content: space-between;
`;

export const LogoWrapper = styled.div`
    display: inline-block;
`;

export const Logo = styled.img`
    width: 48px;
    transition: all 350ms ease;

    @media screen and (max-width: 767px) {
        .logo {
            width: 38px;
        }
    }
`;

export const TopActions = styled.div`
    display: inline-block;
`;

export const TopAction = styled.a`
    display: inline-block;
    margin-left: 36px;

    @media screen and (max-width: 767px) {
        .top-action {
            margin-left: 26px;
        }
    }
`;

export const MoonImg = styled(MoonIcon)`
    width: 32px;
    height: 32px;
    transition: all 350ms ease;
`;

export const SunImg = styled(SunIcon)`
    display: none;
    width: 32px;
    height: 32px;
    transition: all 350ms ease;
`;

export const GitImg = styled(GitIcon)`
    width: 32px;
    height: 32px;
    transition: all 350ms ease;
`;
