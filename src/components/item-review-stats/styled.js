import styled from 'styled-components';
import ItemRating from '../item-rating';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 187px;

    @media screen and (max-width: 991px) {
        max-width: 193px;
    }

    @media screen and (max-width: 767px) {
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
    margin-bottom: 0px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media screen and (max-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const ItemRatingAverage = styled(ItemRating)`
    @media screen and (max-width: 991px) {
        margin-bottom: 4px;
    }
`;

export const RatingAverage = styled.div`
    margin-top: -4px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    line-height: 1em;
`;
