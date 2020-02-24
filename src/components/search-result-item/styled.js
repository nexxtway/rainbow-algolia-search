import styled from 'styled-components';
import { Card } from 'react-rainbow-components';
import { Link } from 'react-router-dom';

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
    color: #a4a7b5;

    &:hover {
        text-decoration: none;
    }

    &:link {
        text-decoration: none;
    }

    &:visited {
        text-decoration: none;
    }

    &:active {
        text-decoration: none;
    }
`;

export const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
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

    @media screen and (max-width: 767px) {
        align-items: flex-start;
        text-align: left;
    }
`;

export const RatingWrapper = styled.div`
    margin-bottom: 15px;
`;
