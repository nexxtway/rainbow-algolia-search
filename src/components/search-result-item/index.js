import React from 'react';
import PropTypes from 'prop-types';
import ItemCategories from '../item-categories';
import ItemRating from '../item-rating';
import ItemInfo from '../item-info';
import { Wrapper, LinkWrapper, FlexWrapper, RatingWrapper, CategoriesWrapper } from './styled';

const SearchResultItem = props => {
    const {
        id,
        title,
        author,
        publisher,
        ratingCount,
        averageRating,
        language,
        cover,
        categories,
        className,
        style,
    } = props;

    const bookUrl = `/book/${id}`;

    return (
        <Wrapper className={className} style={style}>
            <LinkWrapper href={bookUrl}>
                <FlexWrapper>
                    <div>
                        <ItemInfo
                            title={title}
                            author={author}
                            publisher={publisher}
                            language={language}
                            cover={cover}
                        />
                    </div>
                    <div>
                        <RatingWrapper>
                            <ItemRating averageRating={averageRating} ratingCount={ratingCount} />
                        </RatingWrapper>
                        <CategoriesWrapper>
                            <ItemCategories categories={categories} />
                        </CategoriesWrapper>
                    </div>
                </FlexWrapper>
            </LinkWrapper>
        </Wrapper>
    );
};

export default SearchResultItem;

SearchResultItem.propTypes = {
    id: PropTypes.any,
    title: PropTypes.string,
    author: PropTypes.string,
    publisher: PropTypes.string,
    ratingCount: PropTypes.number,
    averageRating: PropTypes.string,
    language: PropTypes.string,
    cover: PropTypes.string,
    categories: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
};
SearchResultItem.defaultProps = {
    id: null,
    title: '',
    author: '',
    publisher: '',
    ratingCount: 0,
    averageRating: '0',
    language: '',
    cover: '',
    categories: [],
    className: undefined,
    style: undefined,
};
