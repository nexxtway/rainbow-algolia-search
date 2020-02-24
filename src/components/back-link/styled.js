import styled from 'styled-components';
import BackArrowIcon from '../icons/back-arrow';

export const Wrapper = styled.div`
    margin-bottom: 43px;
    width: 100%;
`;

export const Link = styled.a`
    font-size: 24px;
    line-height: 1em;
    color: #44d7b6;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        text-decoration: none;
        color: #44d7b6;
    }

    @media screen and (max-width: 991px) {
        font-size: 18px;
    }
`;

export const ArrowImg = styled(BackArrowIcon)`
    margin-right: 10px;
    width: 26px;

    @media screen and (max-width: 991px) {
        width: 19px;
    }
`;
