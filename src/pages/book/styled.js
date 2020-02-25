import styled from 'styled-components';
import { MediaSizes } from '../../constants';

export const HeadingFlex = styled.div`
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        flex-direction: column;
    }
`;

export const RatingWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
    text-align: right;
    margin-bottom: 17px;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        width: 100%;
        justify-content: center;
        text-align: center;
    }
`;

export const ReviewsFlexWrapper = styled.div`
    display: flex;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        flex-direction: column;
    }
`;
