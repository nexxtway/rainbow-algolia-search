import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const MainWrapper = styled.main`
    width: 100%;
`;

const InnerWrapper = styled.main`
    height: 600px;
    background: gray;
    color: white;
`;

const Layout = ({ children }) => (
    <>
        <MainWrapper>
            <Header />
            <InnerWrapper>{children}</InnerWrapper>
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
