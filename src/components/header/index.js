import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'react-rainbow-components';
import { MoonIcon, SunIcon, GitIcon } from '../icons';
import { Wrapper, LogoWrapper, Logo, TopActions, TopAction } from './styled';

const gitUrl = 'https://github.com/nexxtway/rainbow-algolia-search/';

const Header = ({ onSwitchTheme, theme }) => {
    const icon = theme === 'light' ? <MoonIcon /> : <SunIcon />;

    return (
        <Wrapper>
            <LogoWrapper>
                <Logo src="assets/logo.svg" />
            </LogoWrapper>
            <TopActions>
                <TopAction href="#">
                    <ButtonIcon icon={icon} size="large" onClick={onSwitchTheme} />
                </TopAction>
                <TopAction href={gitUrl} target="_blank">
                    <ButtonIcon icon={<GitIcon />} size="large" />
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
