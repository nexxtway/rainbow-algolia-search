import styled from 'styled-components';
import { Rating } from 'react-rainbow-components';

export const ResultItemRating = styled(Rating)`
    height: auto;
    display: block;
    margin-bottom: 6px;
`;

export const ResultItemRatingLabel = styled.div`
    font-size: 14px;
    line-height: 1em;
`;

export const ResultItemCategoriesWrapper = styled.div`
    position: absolute;
    left: auto;
    top: auto;
    right: 20px;
    bottom: 20px;

    @media screen and (max-width: 767px) {
        position: relative;
        right: auto;
        bottom: auto;
    }
`;

export const ResultItemCategoriesLabel = styled.div`
    font-size: 14px;
    line-height: 1em;
`;
