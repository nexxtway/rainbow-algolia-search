import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto 20px auto;
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
    margin-left: 15px;
`;
