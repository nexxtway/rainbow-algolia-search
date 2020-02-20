import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 43px;
    width: 100%;
`;

export const Link = styled.a`
    padding-left: 40px;
    background-image: url('/assets/icons/arrow-back.svg');
    background-position: 0% 50%;
    background-size: 26px 20px;
    background-repeat: no-repeat;
    text-decoration: none;
    font-size: 24px;
    line-height: 1em;
    font-weight: 400;
    color: #44d7b6;

    :hover {
        text-decoration: none;
        color: #44d7b6;
    }

    @media screen and (max-width: 991px) {
        padding-left: 35px;
        background-size: 20px;
        font-size: 19px;
    }

    @media screen and (max-width: 767px) {
        padding-left: 32px;
    }

    @media screen and (max-width: 479px) {
        padding-left: 29px;
        background-size: 18px;
        font-size: 18px;
    }
`;
