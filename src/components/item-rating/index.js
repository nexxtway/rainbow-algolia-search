import React from 'react';
import PropTypes from 'prop-types';
import { Rating, Label } from './styled';

const ItemRating = props => {
    const { ratingCount, averageRating, className, style } = props;

    return (
        <div className={className} style={style}>
            <Rating value={averageRating} />
            <Label>{ratingCount} Ratings</Label>
        </div>
    );
};

export default ItemRating;

ItemRating.propTypes = {
    ratingCount: PropTypes.number,
    averageRating: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemRating.defaultProps = {
    ratingCount: 0,
    averageRating: '0',
    className: undefined,
    style: undefined,
};
