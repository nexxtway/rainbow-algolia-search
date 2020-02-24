import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import BackArrowIcon from '../icons/back-arrow';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    display: flex;
    align-items: flext-start;
    margin: 0 auto 43px auto;
    width: 100%;
    max-width: 1393px;
`;

export const Link = styled(RouterLink)`
    font-size: 24px;
    line-height: 1em;
    color: #44d7b6;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:active,
    &:visited,
    &:hover {
        text-decoration: none;
        color: #44d7b6;
    }

    @media screen and (max-width: ${MediaSizes.md.width}) {
        font-size: 18px;
    }
`;

export const ArrowImg = styled(BackArrowIcon)`
    margin-right: 10px;
    width: 26px;

    @media screen and (max-width: ${MediaSizes.md.width}) {
        width: 19px;
    }
`;
