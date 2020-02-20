import React from 'react';
import { FlexWrapper, DescriptionWrapper } from './styled';
import SearchResultsTotals from '../search-results-totals';
import Pagination from '../pagination';

const search = 'You Dont Know JS';

const SearchResultsDescription = () => {
    return (
        <FlexWrapper>
            <DescriptionWrapper>
                <SearchResultsTotals found={86} search={search} />
            </DescriptionWrapper>
            <Pagination pages={5} defaultActivePage={3} />
        </FlexWrapper>
    );
};

export default SearchResultsDescription;
