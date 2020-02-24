import styled from 'styled-components';

export const HeadingFlex = styled.div`
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const RatingWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
    text-align: right;
    margin-bottom: 17px;
    flex-shrink: 0;

    @media screen and (max-width: 767px) {
        width: 100%;
        justify-content: center;
        text-align: center;
    }
`;

export const ReviewsFlexWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;
