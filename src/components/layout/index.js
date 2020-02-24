import React from 'react';
import PropTypes from 'prop-types';
import { MainWrapper, Container } from './styled';
import Header from '../header';
import Footer from '../footer';
import BackLink from '../back-link';

const homeUrl = '/';

const Layout = ({ children, onSwitchTheme, theme }) => (
    <>
        <MainWrapper>
            <Header onSwitchTheme={onSwitchTheme} theme={theme} />
            <BackLink url={homeUrl} />
            <Container>{children}</Container>
            <Footer />
        </MainWrapper>
    </>
);

export default Layout;

Layout.propTypes = {
    children: PropTypes.node,
    onSwitchTheme: PropTypes.func,
    theme: PropTypes.string,
};

Layout.defaultProps = {
    children: null,
    onSwitchTheme: () => {},
    theme: '',
};
