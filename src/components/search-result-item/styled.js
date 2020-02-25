import styled from 'styled-components';
import { Card } from 'react-rainbow-components';
import { Link } from 'react-router-dom';
import { MediaSizes } from '../../constants';

export const Wrapper = styled(Card)`
    position: relative;
    margin-bottom: 8px;
    display: block;
    padding: 20px;
`;

export const LinkWrapper = styled(Link)`
    display: flex;
    align-items: flex-start;
    text-decoration: none;

    &:hover,
    &:link,
    &:visited,
    &:active {
        text-decoration: none;
    }
`;

export const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const FlexRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: flex-end;
    text-align: right;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

export const CategoriesWrapper = styled.div`
    @media screen and (max-width: 767px) {
        padding-top: 15px;
    }
`;
