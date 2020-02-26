import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MediaSizes } from '../../constants';

export const LinkWrapper = styled(Link)`
    overflow: hidden;
    position: relative;
    width: 150px;
    height: 170px;
    border-radius: 14px;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    background-image: url(${props => props.backgroundImage});

    @media screen and (max-width: ${MediaSizes.md.width}) {
        margin-right: 20px;
        margin-bottom: 14px;
    }
`;

export const Mask = styled.div`
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    display: flex;
    align-items: flex-end;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
`;

export const HiddenCover = styled.img`
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
`;

export const Title = styled.h3`
    color: #fff;
    font-size: 12px;
    line-height: 1.4em;
    text-shadow: 1px 1px 4px #3e3e3c;
`;
