import { connectStateResults } from 'react-instantsearch-dom';

export const DisplayIfQueryInput = connectStateResults(({ searchState, children }) => {
    return searchState && searchState.query ? children : '';
});

export const DisplayIfNotQueryInput = connectStateResults(({ searchState, children }) => {
    return searchState && searchState.query ? '' : children;
});

export const DisplayIfResults = connectStateResults(({ searchResults, children }) => {
    return searchResults && searchResults.nbHits !== 0 ? children : '';
});

export const DisplayIfNotResults = connectStateResults(({ searchResults, children }) => {
    return searchResults && searchResults.nbHits !== 0 ? '' : children;
});
