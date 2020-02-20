import styled from 'styled-components';
import { Card } from 'react-rainbow-components';

export const ResultItemWrapper = styled(Card)`
    position: relative;
    margin-bottom: 8px;
    align-items: stretch;
`;

export const ResultItemContainer = styled.a`
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

export const ResultItemContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ResultItemInfoWrapper = styled.div`
    display: flex;
    padding-right: 20px;

    @media screen and (max-width: 991px) {
        padding-right: 15px;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: 21px;
        padding-right: 0;
    }
`;

export const ResultItemImg = styled.img`
    width: 73px;
    height: auto;
    transition: all 200ms ease;
`;

export const ResultItemInfo = styled.div`
    margin-left: 25px;
`;

export const ResultItemTitle = styled.div`
    text-align: left;
    position: relative;
    top: -3px;
    margin-top: 0;
    margin-bottom: 10px;
    transition: all 200ms ease;
    font-size: 18px;
    line-height: 1.4em;
    font-weight: 700;
    color: #44d7b6;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const ResultItemInfoMeta = styled.div`
    margin-bottom: 9px;
    font-size: 14px;
    line-height: 1em;
    text-align: left;
    color: #a4a7b5;
`;

export const ResultItemInfoMetaFeatured = styled.div`
    margin-left: 8px;
    text-decoration: none;
    color: #44d7b6;
    display: inline;
`;

export const ResultItemInfoMetaValue = styled.div`
    margin-left: 8px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.85);
    display: inline;
`;

export const ItemCategoriesWrapper = styled.div`
    text-align: right;

    @media screen and (max-width: 767px) {
        text-align: left;
    }
`;
