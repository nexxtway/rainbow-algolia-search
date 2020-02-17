import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: fixed;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1393px;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;
`;

const FooterCopyright = styled.div`
    width: 100%;
    color: #576574;
    font-size: 16px;
    text-align: center;
`;

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
