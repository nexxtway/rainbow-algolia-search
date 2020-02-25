import React from 'react';
import PropTypes from 'prop-types';
import {
    Wrapper,
    RatingCount,
    RatingAverageWrapper,
    ItemRatingAverage,
    RatingAverage,
} from './styled';
import ItemStats from '../item-stats';

const ItemReviewStats = props => {
    const { averageRating, ratingCount, ratingStats, className, style } = props;

    return (
        <Wrapper className={className} style={style}>
            <RatingCount>{ratingCount} Customer Ratings</RatingCount>
            <RatingAverageWrapper>
                <ItemRatingAverage
                    averageRating={Math.round(Number(averageRating))}
                    ratingCount={ratingCount}
                    hideLabel
                />
                <RatingAverage>{averageRating} of 5</RatingAverage>
            </RatingAverageWrapper>

            <ItemStats ratingStats={ratingStats} />
        </Wrapper>
    );
};

export default ItemReviewStats;

ItemReviewStats.propTypes = {
    averageRating: PropTypes.number,
    ratingCount: PropTypes.number,
    ratingStats: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemReviewStats.defaultProps = {
    averageRating: '',
    ratingCount: 0,
    ratingStats: [],
    className: undefined,
    style: undefined,
};
