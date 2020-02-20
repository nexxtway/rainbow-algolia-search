import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    left: auto;
    top: auto;
    right: 20px;
    bottom: 20px;

    @media screen and (max-width: 767px) {
        position: relative;
        right: auto;
        bottom: auto;
    }
`;

export const Label = styled.p`
    font-size: 14px;
    line-height: 1em;
    margin-bottom: 7px;
`;
