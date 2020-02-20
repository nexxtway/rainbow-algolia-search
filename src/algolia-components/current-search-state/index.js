import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';

export default connectStateResults(({ searchState, searchResults, component: Component }) => {
    const currentQuery = searchState && searchState.query;
    const nbHits = searchResults && searchResults.nbHits;
    return <Component found={nbHits} search={currentQuery} />;
});
