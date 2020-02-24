import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import BackArrowIcon from '../icons/back-arrow';

export const Wrapper = styled.div`
    display: flex;
    align-items: flext-start;
    margin: 0 auto 43px auto;
    width: 100%;
    max-width: 1393px;
    padding: 0 20px;
`;

export const Link = styled(RouterLink)`
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
