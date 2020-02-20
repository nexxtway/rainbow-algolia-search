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

export const Wrapper = styled.div`
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

export const Img = styled.img`
    width: 73px;
    height: auto;
    transition: all 200ms ease;
`;

export const Details = styled.div`
    margin-left: 25px;
`;

export const Title = styled.div`
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

export const Metadata = styled.div`
    margin-bottom: 9px;
    font-size: 14px;
    line-height: 1em;
    text-align: left;
    color: #a4a7b5;
`;

export const MetadataFeaturedValue = styled.div`
    margin-left: 8px;
    text-decoration: none;
    color: #44d7b6;
    display: inline;
`;

export const MetadataValue = styled.div`
    margin-left: 8px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.85);
    display: inline;
`;
