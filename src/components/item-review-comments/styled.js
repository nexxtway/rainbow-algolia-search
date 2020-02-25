import styled from 'styled-components';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    padding-left: 75px;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        padding-left: 0;
    }
`;
