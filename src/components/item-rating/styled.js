import styled from 'styled-components';
import { Rating as RainbowRating } from 'react-rainbow-components';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        flex-direction: column-reverse;
    }
`;

export const Rating = styled(RainbowRating)`
    height: auto;
    display: block;
    margin-bottom: 6px;
`;

export const Label = styled.div`
    font-size: 14px;
    line-height: 1em;
    color: ${props => props.theme.rainbow.palette.text.header};

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        margin-bottom: 7px;
    }
`;
