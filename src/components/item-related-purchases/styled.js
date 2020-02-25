import styled from 'styled-components';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    margin-bottom: 40px;
    width: 100%;
`;

export const FlexWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`;
