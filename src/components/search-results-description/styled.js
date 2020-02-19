import styled from 'styled-components';

export const ResultsDescription = styled.div`
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms ease;

    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`;

export const ResultsTotalsDescription = styled.div`
    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`;
