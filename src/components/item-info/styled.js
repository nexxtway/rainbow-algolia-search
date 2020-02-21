import styled from 'styled-components';

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
    color: ${props => props.theme.rainbow.palette.brand.main};

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const Metadata = styled.div`
    margin-bottom: 9px;
    font-size: 14px;
    line-height: 1em;
    text-align: left;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

export const MetadataFeaturedValue = styled.div`
    margin-left: 8px;
    text-decoration: none;
    display: inline;
    color: ${props => props.theme.rainbow.palette.text.title};
`;

export const MetadataValue = styled.div`
    margin-left: 8px;
    text-decoration: none;
    color: ${props => props.theme.rainbow.palette.text.main};
    display: inline;
`;
