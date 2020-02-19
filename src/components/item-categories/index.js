import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';

const ItemCategories = props => {
    const { className, style, categories } = props;

    if (categories) {
        return (
            <div className={className} style={style}>
                {categories.map(category => (
                    <Badge label={category} key={category} />
                ))}
            </div>
        );
    }
    return null;
};

export default ItemCategories;

ItemCategories.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    categories: PropTypes.array,
};
ItemCategories.defaultProps = {
    className: undefined,
    style: undefined,
    categories: null,
};
