import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';

const ItemCategories = props => {
    const { className, style, categories } = props;

    if (categories.length) {
        return (
            <div className={className} style={style}>
                {categories.map((category, index) => {
                    const key = `${category}-${index}`;

                    return <Badge label={category} key={key} />;
                })}
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
    categories: [],
};
