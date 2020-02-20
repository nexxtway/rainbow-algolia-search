import React from 'react';
import PropTypes from 'prop-types';
import { ResultItemRating, ResultItemRatingLabel } from './styled';

const ItemRating = props => {
    const { ratingCount, averageRating, className, style } = props;

    return (
        <div className={className} style={style}>
            <ResultItemRating value={averageRating} />
            <ResultItemRatingLabel>{ratingCount} Ratings</ResultItemRatingLabel>
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
