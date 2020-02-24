import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
`;

export const Label = styled.h1`
    font-family: Montserrat, sans-serif;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 1.6px;
    transition: all 350ms ease;
    margin: 10px 0;
    color: ${props => props.theme.rainbow.palette.text.main};
`;

export const Description = styled.div`
    transition: all 350ms ease;
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 18px;
`;
