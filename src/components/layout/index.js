import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

const MainWrapper = styled.main`
    width: 100%;
    height: 100vh;
    padding-bottom: 43px;
    background-color: #f4f6f9;
    font-family: Montserrat, sans-serif;
    color: #a4a7b5;
    font-size: 24px;
    line-height: 1.4em;
    font-weight: 400;
`;

const Container = styled.main`
    width: 100%;
    max-width: 1030px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
    border: 1px solid red;
`;

const Layout = ({ children }) => (
    <>
        <MainWrapper>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </MainWrapper>
    </>
);

export default Layout;

Layout.propTypes = {
    children: PropTypes.node,
};

Layout.defaultProps = {
    children: null,
};
