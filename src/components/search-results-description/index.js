import React from 'react';
import { ResultsDescription, ResultsTotalsDescription } from './styled';
import SearchResultsTotals from '../search-results-totals';
import Pagination from '../pagination';

const search = 'You Dont Know JS';

const SearchResultsDescription = () => {
    return (
        <ResultsDescription>
            <ResultsTotalsDescription>
                <SearchResultsTotals found={86} search={search} />
            </ResultsTotalsDescription>
            <Pagination pages={5} defaultActivePage={3} />
        </ResultsDescription>
    );
};

export default SearchResultsDescription;
