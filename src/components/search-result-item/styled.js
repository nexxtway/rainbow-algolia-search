import styled from 'styled-components';
import { Card } from 'react-rainbow-components';

export const Wrapper = styled(Card)`
    position: relative;
    margin-bottom: 8px;
    align-items: stretch;
    display: block;
    width: 100%;
    padding: 20px;
    text-decoration: none;
    color: #a4a7b5;

    :hover {
        text-decoration: none;
        color: #a4a7b5;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const RatingWrapper = styled.div`
    text-align: right;
    margin-bottom: 17px;

    @media screen and (max-width: 767px) {
        text-align: left;
    }
`;

export const CategoriesWrapper = styled.div`
    text-align: right;

    @media screen and (max-width: 767px) {
        text-align: left;
    }
`;
