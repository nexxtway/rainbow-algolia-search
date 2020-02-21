import React from 'react';
import PropTypes from 'prop-types';
import {
    Wrapper,
    HeadingWrapper,
    AvatarWrapper,
    Avatar,
    AvatarLabel,
    ReviewWrapper,
} from './styled';
import ItemRating from '../item-rating';

const ItemReviewComment = props => {
    const { photo, name, rating, review, className, style } = props;

    return (
        <Wrapper className={className} style={style}>
            <HeadingWrapper>
                <AvatarWrapper>
                    <Avatar src={photo} />
                    <AvatarLabel>{name}</AvatarLabel>
                </AvatarWrapper>
                <ItemRating averageRating={rating} />
            </HeadingWrapper>
            <ReviewWrapper>{review}</ReviewWrapper>
        </Wrapper>
    );
};

export default ItemReviewComment;

ItemReviewComment.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    review: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemReviewComment.defaultProps = {
    photo: '',
    name: '',
    rating: null,
    review: '',
    className: undefined,
    style: undefined,
};
