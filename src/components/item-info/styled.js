import styled from 'styled-components';
import { MediaSizes } from '../../constants';

const hasLargeSize = size => {
    return size && size === 'large';
};

export const Wrapper = styled.div`
    display: flex;
    padding-right: 20px;

    @media screen and (max-width: ${MediaSizes.md.width}) {
        padding-right: 15px;
    }

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        width: 100%;
        margin-bottom: 21px;
        padding-right: 0;
    }
`;

export const Img = styled.img`
    width: ${props => (hasLargeSize(props.size) ? '131px' : '73px')};
    height: auto;
    transition: all 200ms ease;
`;

export const Details = styled.div`
    margin-left: 25px;
`;

export const Title = styled.div.attrs(props => props.theme.rainbow.palette)`
    text-align: left;
    position: relative;
    top: -3px;
    margin-top: 0;
    margin-bottom: 10px;
    transition: all 200ms ease;
    font-size: ${props => (hasLargeSize(props.size) ? '24px' : '18px')};
    line-height: 1.4em;
    font-weight: 700;
    color: ${props => (props.titleColor === 'main' ? props.text.main : props.brand.main)};

    @media screen and (max-width: 767px) {
        font-size: ${props => (hasLargeSize(props.size) ? '21px' : '16px')};
    }
`;

export const Metadata = styled.div`
    margin-bottom: 9px;
    font-size: ${props => (hasLargeSize(props.size) ? '18px' : '14px')};
    line-height: 1em;
    text-align: left;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

export const MetadataFeaturedValue = styled.div`
    margin-left: 8px;
    text-decoration: none;
    display: inline;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

export const MetadataValue = styled.div`
    margin-left: 8px;
    text-decoration: none;
    color: ${props => props.theme.rainbow.palette.text.main};
    display: inline;
`;
