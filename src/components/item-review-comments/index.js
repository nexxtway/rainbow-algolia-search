import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import ItemReviewComment from '../item-review-comment';

const ItemReviewComments = props => {
    const { reviews, className, style } = props;

    const hasReviews = !!reviews.length;

    if (hasReviews) {
        return (
            <Wrapper className={className} style={style}>
                {reviews.map((item, index) => {
                    const key = `${item}-${index}`;

                    return (
                        <ItemReviewComment
                            key={key}
                            photo={item.photo}
                            name={item.name}
                            rating={item.rating}
                            review={item.review}
                        />
                    );
                })}
            </Wrapper>
        );
    }
    return null;
};

export default ItemReviewComments;

ItemReviewComments.propTypes = {
    reviews: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemReviewComments.defaultProps = {
    reviews: [],
    className: undefined,
    style: undefined,
};
