import styled from 'styled-components';

export const HeadingLabel = styled.div`
    margin-bottom: 7px;
    color: rgba(96, 112, 127, 0.5);
    line-height: 1em;
    transition: all 200ms ease;
    max-height: 20px;
    overflow: hidden;
    ${props => props.searchState && props.searchState.query && 'max-height: 0;'};

    @media screen and (max-width: 991px) {
        font-size: 20px;
    }

    @media screen and (max-width: 767px) {
        font-size: 18px;
    }

    @media screen and (max-width: 479px) {
        font-size: 14px;
    }
`;
