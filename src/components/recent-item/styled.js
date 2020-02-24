import styled from 'styled-components';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    margin-bottom: 30px;
`;

export const Link = styled.a`
    padding-right: 25px;
    background-image: url('/assets/icons/forward-arrow-curved.svg');
    background-position: 100% 50%;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    margin-left: 5px;
    color: #44d7b6;
    text-decoration: underline;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        background-size: 12px 12px;
    }
`;
