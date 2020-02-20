import styled from 'styled-components';
import Pagination from '../../algolia-components/pagination';

export const PaginationWrapper = styled(Pagination)`
    padding-top: 20px;
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms ease;

    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`;
