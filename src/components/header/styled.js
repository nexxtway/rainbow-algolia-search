import styled from 'styled-components';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto 43px auto;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1393px;
    padding: 20px 20px 0 20px;
    justify-content: space-between;
`;

export const LogoWrapper = styled.div`
    display: inline-block;
`;

export const Logo = styled.img`
    width: 48px;
    transition: all 350ms ease;

    @media screen and (max-width: ${MediaSizes.md.width}) {
        width: 38px;
    }
`;

export const TopActions = styled.div`
    display: inline-block;
`;

export const TopAction = styled.a`
    margin-left: 15px;
`;
