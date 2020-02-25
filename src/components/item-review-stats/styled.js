import styled from 'styled-components';
import ItemRating from '../item-rating';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 187px;

    @media screen and (max-width: ${MediaSizes.md.width}) {
        max-width: 193px;
    }

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        max-width: 187px;
        margin-bottom: 40px;
    }
`;

export const RatingCount = styled.p`
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 1em;
`;

export const RatingAverageWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${MediaSizes.md.width}) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        flex-direction: row;
        align-items: center;
    }
`;

export const ItemRatingAverage = styled(ItemRating)`
    @media screen and (max-width: ${MediaSizes.md.width}) {
        margin-bottom: 4px;
    }
`;

export const RatingAverage = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    margin-top: -4px;
    color: ${props => props.text.label};
    font-size: 16px;
    line-height: 1em;
`;
