import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'react-rainbow-components';
import { MoonIcon, SunIcon, GitIcon } from '../icons';
import { Wrapper, LogoWrapper, Logo, TopActions, TopAction } from './styled';

const gitUrl = 'https://github.com/nexxtway/rainbow-algolia-search/';

const cyanDarkTheme = {
    rainbow: {
        palette: {
            brand: '#44D7B6',
            mainBackground: '#212121',
        },
    },
};

const lightTheme = {
    rainbow: {
        palette: {
            brand: '#44D7B6',
            mainBackground: '#f4f6f9',
        },
    },
};

const Header = ({ onSwitchTheme }) => {
    const [icon, setIcon] = useState(<MoonIcon />);
    const [currentTheme, setTheme] = useState('light');

    const toogleTheme = () => {
        if (currentTheme === 'dark') {
            setIcon(<MoonIcon />);
            setTheme('light');
            return onSwitchTheme(lightTheme);
        }
        setIcon(<SunIcon />);
        setTheme('dark');
        return onSwitchTheme(cyanDarkTheme);
    };

    return (
        <Wrapper>
            <LogoWrapper>
                <Logo src="assets/logo.svg" />
            </LogoWrapper>
            <TopActions>
                <TopAction href="#">
                    <ButtonIcon icon={icon} size="large" onClick={toogleTheme} />
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
};

Header.defaultProps = {
    onSwitchTheme: () => {},
};
