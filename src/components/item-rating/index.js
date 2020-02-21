import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import { Rating, Label } from './styled';

const ItemRating = props => {
    const { ratingCount, averageRating, hideLabel, className, style } = props;

    const showLabel = !hideLabel;

    return (
        <div className={className} style={style}>
            <Rating value={String(averageRating)} />

            <RenderIf isTrue={showLabel}>
                <Label>{ratingCount} Ratings</Label>
            </RenderIf>
        </div>
    );
};

export default ItemRating;

ItemRating.propTypes = {
    ratingCount: PropTypes.number,
    averageRating: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    hideLabel: PropTypes.bool,
};
ItemRating.defaultProps = {
    ratingCount: 0,
    averageRating: 0,
    className: undefined,
    style: undefined,
    hideLabel: false,
};
