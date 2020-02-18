import styled from 'styled-components';
import { Input } from 'react-rainbow-components';
import { BookIcon } from '../../components/icons';

export const IntroWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 32px;
    transition: all 350ms ease;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;

    @media screen and (max-width: 991px) {
        margin-bottom: 16px;
    }
`;

export const IntroPresentation = styled.div`
    margin-bottom: 36px;
    padding-top: 59px;
    transition: all 200ms ease;

    @media screen and (max-width: 767px) {
        padding-top: 49px;
    }

    @media screen and (max-width: 479px) {
        padding-top: 39px;
    }
`;

export const BookImg = styled(BookIcon)`
    width: 110px;
    height: auto;
    margin-bottom: 29px;
    transition: all 200ms ease;

    @media screen and (max-width: 991px) {
        width: 90px;
    }

    @media screen and (max-width: 767px) {
        width: 80px;
        margin-bottom: 24px;
    }

    @media screen and (max-width: 479px) {
        width: 70px;
    }
`;

export const IntroLabel = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    transition: all 350ms ease;
    font-family: Montserrat, sans-serif;
    font-size: 64px;
    line-height: 1em;
    font-weight: 400;
    letter-spacing: 1.6px;

    @media screen and (max-width: 991px) {
        font-size: 54px;
    }

    @media screen and (max-width: 767px) {
        font-size: 44px;
    }

    @media screen and (max-width: 479px) {
        font-size: 34px;
    }
`;

export const RecentItem = styled.a`
    padding-right: 25px;
    background-image: url('/assets/icons/forward-arrow-curved.svg');
    background-position: 100% 50%;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    margin-left: 5px;

    @media screen and (max-width: 767px) {
        background-size: 12px 12px;
    }
`;

export const InputWrapper = styled(Input)`
    margin: 0 auto 16px auto;
    max-width: 860px;
`;
