import React from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import { Pagination } from 'react-rainbow-components';

// eslint-disable-next-line react/prop-types
const PaginationRainbowAlgoliaAdapter = ({ currentRefinement, nbPages, refine }) => {
    return (
        <Pagination
            pages={nbPages}
            activePage={currentRefinement}
            onChange={(event, page) => {
                event.preventDefault();
                refine(page);
            }}
        />
    );
};

const PaginationRainbowAlgolia = connectPagination(PaginationRainbowAlgoliaAdapter);

export default PaginationRainbowAlgolia;
