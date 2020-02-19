import styled from 'styled-components';
import { Card } from 'react-rainbow-components';

export const Container = styled(Card)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`;

export const LeftContent = styled.div`
    display: flex;
`;

export const RightContent = styled.div`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        margin: 0 auto;
    }
`;

export const Cover = styled.img`
    margin-right: 12px;
    width: 74px;
    height: 110px;
`;

export const Info = styled.div`
    margin-left: 12px;

    @media screen and (max-width: 800px) {
        margin-bottom: 16px;
    }
`;

export const Title = styled.h1`
    color: #44d7b6;
    font-weight: 700;
    font-size: 18px;
    text-align: left;
    margin-bottom: 4px;
    line-height: 1.5;
    text-decoration: none;
`;

export const OutputContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 4px 0;
`;

export const OutputLabel = styled.p`
    font-size: 14px;
    color: #a4a7b5;
    line-height: 14px;
    margin: 4px 0;
    text-decoration: none;
`;

export const OutputValue = styled.p`
    font-size: 16px;
    color: rgba(0 0 0, 0.85);
    margin: 0 0 0 8px;
    line-height: 16px;
    text-decoration: none;
`;

export const OutputValueBrand = styled(OutputValue)`
    color: #44d7b6;
`;

export const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen and (max-width: 800px) {
        align-items: center;
        flex-direction: column-reverse;
    }
`;

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen and (max-width: 800px) {
        align-items: center;
        margin-top: 20px;
    }
`;
