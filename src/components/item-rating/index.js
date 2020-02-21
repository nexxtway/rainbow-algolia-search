import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import { Rating, Label } from './styled';

const ItemRating = props => {
    const { ratingCount, rating, hideLabel, className, style } = props;

    const hasRatingCount = ratingCount !== null;
    const showLabel = hasRatingCount && !hideLabel;

    return (
        <div className={className} style={style}>
            <Rating value={String(rating)} />

            <RenderIf isTrue={showLabel}>
                <Label>{ratingCount} Ratings</Label>
            </RenderIf>
        </div>
    );
};

export default ItemRating;

ItemRating.propTypes = {
    ratingCount: PropTypes.number,
    rating: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    hideLabel: PropTypes.bool,
};
ItemRating.defaultProps = {
    ratingCount: null,
    rating: 0,
    className: undefined,
    style: undefined,
    hideLabel: false,
};
