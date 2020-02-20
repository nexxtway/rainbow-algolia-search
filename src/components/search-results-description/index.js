import React from 'react';
import { FlexWrapper, DescriptionWrapper } from './styled';
import SearchResultsTotals from '../search-results-totals';
import Pagination from '../pagination';
import CurrentSearchState from '../../algolia-components/current-search-state';

const SearchResultsDescription = () => {
    return (
        <FlexWrapper>
            <DescriptionWrapper>
                <CurrentSearchState component={SearchResultsTotals} />
            </DescriptionWrapper>
            <Pagination pages={5} defaultActivePage={3} />
        </FlexWrapper>
    );
};

export default SearchResultsDescription;
