import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'react-rainbow-components';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon, GitIcon } from '../icons';
import { Wrapper, LogoWrapper, Logo, TopActions, TopAction } from './styled';

const homePageUrl = '/';
const gitUrl = 'https://github.com/nexxtway/rainbow-algolia-search/';

const Header = ({ onSwitchTheme, theme }) => {
    const switchIcon = theme === 'light' ? <MoonIcon /> : <SunIcon />;

    const gitIcon = <GitIcon theme={theme} />;

    return (
        <Wrapper>
            <LogoWrapper>
                <Link to={homePageUrl}>
                    <Logo src="/assets/logo.svg" />
                </Link>
            </LogoWrapper>
            <TopActions>
                <TopAction href="#">
                    <ButtonIcon icon={switchIcon} size="large" onClick={onSwitchTheme} />
                </TopAction>
                <TopAction href={gitUrl} target="_blank">
                    <ButtonIcon icon={gitIcon} size="large" />
                </TopAction>
            </TopActions>
        </Wrapper>
    );
};

export default Header;

Header.propTypes = {
    onSwitchTheme: PropTypes.func,
    theme: PropTypes.string,
};

Header.defaultProps = {
    onSwitchTheme: () => {},
    theme: '',
};
