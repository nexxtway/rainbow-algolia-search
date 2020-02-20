import React from 'react';
import { Wrapper, Copyright } from './styled';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <Wrapper>
            <Copyright>© Copyright Nexxtway {year}</Copyright>
        </Wrapper>
    );
};

export default Footer;
