import React from 'react';
import PropTypes from 'prop-types';
import { MainWrapper, Container } from './styled';
import Header from '../header';
import Footer from '../footer';

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
