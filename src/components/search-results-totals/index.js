import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { SearchResultsTotalsWrapper, ResultsLabel } from './styled';

const SearchResultsTotals = props => {
    const { search, found } = props;

    return (
        <SearchResultsTotalsWrapper>
            <RenderIf isTrue={!!found}>
                <ResultsLabel>
                    Showing <strong>{found}</strong> results for
                    <strong>“{search}”</strong> in all Categories
                </ResultsLabel>
            </RenderIf>
            <RenderIf isTrue={!found}>
                <div>0 results found</div>
            </RenderIf>
        </SearchResultsTotalsWrapper>
    );
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
