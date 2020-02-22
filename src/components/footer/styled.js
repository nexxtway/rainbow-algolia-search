import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 0%;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1393px;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;
`;

export const Copyright = styled.p.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 100%;
    color: ${props => props.text.label};
    font-size: 16px;
    text-align: center;
    padding-bottom: 5px;
`;
