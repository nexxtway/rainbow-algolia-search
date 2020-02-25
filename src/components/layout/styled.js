import styled from 'styled-components';

export const MainWrapper = styled.main`
    position: relative;
    width: 100%;
    padding-bottom: 43px;
    background-color: ${props => props.theme.rainbow.palette.background.secondary};
    font-family: Lato, sans-serif;
    color: ${props => props.theme.rainbow.palette.text.header};
    font-weight: 400;
    min-height: 100vh;
`;

export const ChildrenWrapper = styled.main`
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
`;
