import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PaginationItem } from './styled';

const Pagination = props => {
    const { pages, defaultActivePage, className, style } = props;
    const [activePage, setActivePage] = useState(defaultActivePage);

    return (
        <PaginationItem
            pages={pages}
            activePage={activePage}
            onChange={(e, page) => setActivePage(page)}
            className={className}
            style={style}
        />
    );
};

export default Pagination;

Pagination.propTypes = {
    pages: PropTypes.number,
    defaultActivePage: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
};

Pagination.defaultProps = {
    pages: 0,
    defaultActivePage: 1,
    className: undefined,
    style: undefined,
};
