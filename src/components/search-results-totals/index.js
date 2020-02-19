import React from 'react';
import PropTypes from 'prop-types';
import { SearchResultsTotalsWrapper } from './styled';

const SearchResultsTotals = props => {
    const { search, found } = props;

    if (found) {
        return (
            <SearchResultsTotalsWrapper>
                Showing <strong>{found}</strong> results for
                <strong>“{search}”</strong> in all Categories
            </SearchResultsTotalsWrapper>
        );
    }
    return null;
};

export default SearchResultsTotals;

SearchResultsTotals.propTypes = {
    search: PropTypes.string,
    found: PropTypes.number,
};

SearchResultsTotals.defaultProps = {
    search: '',
    found: 0,
};
