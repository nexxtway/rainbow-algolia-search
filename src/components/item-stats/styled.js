import styled from 'styled-components';
import { ProgressBar as RainbowProgressBar } from 'react-rainbow-components';

export const Wrapper = styled.div`
    position: relative;
    padding-bottom: 5px;
`;

export const Label = styled.p`
    display: inline-block;
    width: 100%;
    height: auto;
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 12px;
    line-height: 1em;
`;

export const ProgressWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Percentage = styled.div`
    color: #ffb900;
    font-size: 12px;
    line-height: 1em;
    font-weight: 900;
`;

export const ProgressBar = styled(RainbowProgressBar)`
    width: 100%;
    max-width: 151px;
    line-height: 1em;
`;
