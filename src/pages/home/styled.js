import styled from 'styled-components';
import { BookIcon } from '../../components/icons';
import AlgoliaLogo from '../../components/algolia-logo';
import InputSearch from '../../algolia-components/search-input';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    overflow: hidden;
    margin-bottom: 32px;
    transition: all 300ms ease;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    /* stylelint-disable-next-line value-keyword-case */
    ${props => props.searchState && props.searchState.query && 'overflow: visible;'}

    @media screen and (max-width: ${MediaSizes.md.width}) {
        margin-bottom: 16px;
    }
`;

export const PresentationWrapper = styled.div`
    margin-bottom: 36px;
    padding-top: 59px;
    transition: all 300ms ease;
    margin-top: 36px;
    /* stylelint-disable-next-line value-keyword-case */
    ${props => props.searchState && props.searchState.query && 'padding-top: 0; margin-top: -50px;'}

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        padding-top: 49px;
    }
`;

export const BookImg = styled(BookIcon)`
    width: 110px;
    height: auto;
    margin-bottom: 29px;
    transition: all 150ms ease;
    max-height: 200px;
    /* stylelint-disable-next-line value-keyword-case */
    ${props => props.searchState && props.searchState.query && 'max-height: 0; margin-bottom: 0px;'}

    @media screen and (max-width: ${MediaSizes.md.width}) {
        width: 90px;
    }

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        width: 80px;
        margin-bottom: 24px;
    }
`;

export const IntroLabel = styled.h1`
    margin-top: 0;
    transition: all 350ms ease;
    font-family: Montserrat, sans-serif;
    font-size: 64px;
    line-height: 1em;
    font-weight: 400;
    margin-bottom: 29px;
    letter-spacing: 1.6px;
    /* stylelint-disable-next-line value-keyword-case */
    ${props =>
        props.searchState && props.searchState.query && 'margin-bottom: 0px;font-size: 32px;'}
    color: ${props => props.theme.rainbow.palette.text.main};

    @media screen and (max-width: ${MediaSizes.md.width}) {
        font-size: 54px;
    }

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        font-size: 44px;
    }
`;

export const RecentItem = styled.a`
    padding-right: 25px;
    background-image: url('/assets/icons/forward-arrow-curved.svg');
    background-position: 100% 50%;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    margin-left: 5px;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        background-size: 12px 12px;
    }
`;

export const InputWrapper = styled(InputSearch)`
    margin: 0 auto 16px auto;
    max-width: 860px;
`;

export const StyledAlgoliaLogo = styled(AlgoliaLogo)`
    color: ${props => props.theme.rainbow.palette.text.header};
`;
