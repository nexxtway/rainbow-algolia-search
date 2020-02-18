import React from 'react';
import { FooterWrapper, FooterContainer, FooterCopyright } from './styled';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterCopyright>© Copyright Nexxtway {year}</FooterCopyright>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;
