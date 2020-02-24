import styled from 'styled-components';

export const Wrapper = styled.div`
    right: 20px;
    bottom: 20px;
`;

export const Label = styled.p`
    font-size: 14px;
    line-height: 1em;
    margin-bottom: 7px;
    color: ${props => props.theme.rainbow.palette.text.header};
`;
