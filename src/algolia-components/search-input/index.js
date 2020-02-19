import React from 'react';
import { Input } from 'react-rainbow-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchIcon } from '../../components/icons';

// eslint-disable-next-line react/prop-types
const SearchInputRainbowAlgoliaAdapter = ({ currentRefinement, refine }) => {
    return (
        <Input
            type="search"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
            iconPosition="right"
            icon={<SearchIcon />}
        />
    );
};

const SearchInputRainbowAlgolia = connectSearchBox(SearchInputRainbowAlgoliaAdapter);

export default SearchInputRainbowAlgolia;
