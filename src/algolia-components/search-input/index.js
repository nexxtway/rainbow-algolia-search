import React from 'react';
import { Input } from 'react-rainbow-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchIcon } from '../../components/icons';

const SearchInputRainbowAlgoliaAdapter = ({ className, currentRefinement, refine }) => {
    return (
        <Input
            className={className}
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
