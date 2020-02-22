import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
    overflow: hidden;
    position: relative;
    width: auto;
    border-radius: 14px;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    max-width: 145px;

    @media screen and (max-width: 991px) {
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
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        to(rgba(0, 0, 0, 0.5))
    );
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
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
`;
