import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 10px;
`;

export const Label = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    transition: all 200ms ease;
    color: ${props => props.text.main};
    font-size: 20px;
    line-height: 1.4em;
    font-weight: 700;
`;
