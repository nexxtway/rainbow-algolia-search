import styled from 'styled-components';

const LatoBold = 'Lato Bold';

export const SearchResultsTotalsWrapper = styled.div`
    transition: all 350ms ease;
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 18px;
    line-height: 1.4em;

    strong {
        font-family: ${LatoBold};
    }
`;

export const ResultsLabel = styled.p`
    margin-bottom: 15px;
`;
