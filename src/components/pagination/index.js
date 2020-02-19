import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PaginationWrapper } from './styled';

const Pagination = props => {
    const { pages, defaultActivePage } = props;
    const [activePage, setActivePage] = useState(defaultActivePage);

    return (
        <PaginationWrapper
            pages={pages}
            activePage={activePage}
            onChange={(e, page) => setActivePage(page)}
        />
    );
};

export default Pagination;

Pagination.propTypes = {
    pages: PropTypes.number,
    defaultActivePage: PropTypes.number,
};

Pagination.defaultProps = {
    pages: 0,
    defaultActivePage: 1,
};
