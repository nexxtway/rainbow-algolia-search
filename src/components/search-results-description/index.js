import React from 'react';
import { ResultsDescription, ResultsTotalsDescription } from './styled';
import SearchResultsTotals from '../search-results-totals';
import Pagination from '../pagination';
import CurrentSearchState from '../../algolia-components/current-search-state';

const SearchResultsDescription = () => {
    return (
        <ResultsDescription>
            <ResultsTotalsDescription>
                <CurrentSearchState component={SearchResultsTotals} />
            </ResultsTotalsDescription>
            <Pagination pages={5} defaultActivePage={3} />
        </ResultsDescription>
    );
};

export default SearchResultsDescription;
