import styled from 'styled-components';

export const FlexWrapper = styled.div`
    display: flex;
    margin-bottom: 28px;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms ease;

    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`;

export const DescriptionWrapper = styled.div`
    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`;
