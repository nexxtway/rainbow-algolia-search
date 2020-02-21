import React from 'react';
import PropTypes from 'prop-types';
import { MainWrapper, Container } from './styled';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children, onSwitchTheme }) => (
    <>
        <MainWrapper>
            <Header onSwitchTheme={onSwitchTheme} />
            <Container>{children}</Container>
            <Footer />
        </MainWrapper>
    </>
);

export default Layout;

Layout.propTypes = {
    children: PropTypes.node,
    onSwitchTheme: PropTypes.func,
};

Layout.defaultProps = {
    children: null,
    onSwitchTheme: () => {},
};
