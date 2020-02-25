import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import { Wrapper, Rating, Label } from './styled';

const ItemRating = props => {
    const { ratingCount, averageRating, hideLabel, className, style } = props;

    const hasRatingCount = ratingCount !== null;
    const showLabel = hasRatingCount && !hideLabel;

    return (
        <Wrapper className={className} style={style}>
            <Rating value={String(averageRating)} />

            <RenderIf isTrue={showLabel}>
                <Label>{ratingCount} Ratings</Label>
            </RenderIf>
        </Wrapper>
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
    ratingCount: null,
    averageRating: 0,
    className: undefined,
    style: undefined,
    hideLabel: false,
};
