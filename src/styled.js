import styled from 'styled-components';

export const HeadingLabel = styled.div`
    margin-bottom: 7px;
    line-height: 1em;
    transition: all 200ms ease;
    max-height: 20px;
    overflow: hidden;
    /* stylelint-disable-next-line value-keyword-case */
    ${props => props.searchState && props.searchState.query && 'max-height: 0;'}
    color: ${props => props.theme.rainbow.palette.text.title};

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

export const ContainerMedium = styled.div`
    max-width: 1030px;
    margin: 0 auto;
`;
