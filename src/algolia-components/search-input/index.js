import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-rainbow-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchIcon } from '../../components/icons';

const SearchInputRainbowAlgoliaAdapter = props => {
    // eslint-disable-next-line react/prop-types
    const { currentRefinement, refine, label, className, style } = props;
    return (
        <Input
            className={className}
            style={style}
            label={label}
            type="search"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
            iconPosition="right"
            icon={<SearchIcon />}
            placeholder="What book are you looking for?"
            autoComplete="off"
        />
    );
};

const SearchInputRainbowAlgolia = connectSearchBox(SearchInputRainbowAlgoliaAdapter);

export default SearchInputRainbowAlgolia;

SearchInputRainbowAlgoliaAdapter.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    className: PropTypes.string,
    style: PropTypes.object,
};
SearchInputRainbowAlgoliaAdapter.defaultProps = {
    label: null,
    className: undefined,
    style: undefined,
};
