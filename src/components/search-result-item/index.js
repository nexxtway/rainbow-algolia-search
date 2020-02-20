import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import ItemCategories from '../item-categories';
import {
    ResultItemWrapper,
    ResultItemContainer,
    ResultItemContent,
    ResultItemInfoWrapper,
    ResultItemImg,
    ResultItemInfo,
    ResultItemTitle,
    ResultItemInfoMeta,
    ResultItemInfoMetaFeatured,
    ResultItemInfoMetaValue,
    ResultItemRatingWrapper,
    ResultItemRatingLite,
    ResultItemRating,
    ResultItemRatingLabel,
    ResultItemCategoriesWrapper,
    ResultItemCategoriesLabel,
} from './styled';

const SearchResultItem = props => {
    const {
        className,
        style,
        title,
        author,
        publishedBy,
        ratingCount,
        averageRating,
        language,
        cover,
        categories,
    } = props;

    const hasCategories = !!categories.length;
    const hasAuthor = !!author.length;
    const hasPublisher = !!publishedBy.length;
    const hasLanguage = !!language.length;

    return (
        <ResultItemWrapper className={className} style={style}>
            <ResultItemContainer>
                <ResultItemContent>
                    <ResultItemInfoWrapper>
                        <ResultItemImg src={cover} />
                        <ResultItemInfo>
                            <ResultItemTitle>{title}</ResultItemTitle>
                            <RenderIf isTrue={hasAuthor}>
                                <ResultItemInfoMeta>
                                    By:
                                    <ResultItemInfoMetaFeatured>
                                        {author}
                                    </ResultItemInfoMetaFeatured>
                                </ResultItemInfoMeta>
                            </RenderIf>
                            <RenderIf isTrue={hasPublisher}>
                                <ResultItemInfoMeta>
                                    Published by:
                                    <ResultItemInfoMetaValue>O&#x27;Reily</ResultItemInfoMetaValue>
                                </ResultItemInfoMeta>
                            </RenderIf>
                            <RenderIf isTrue={hasLanguage}>
                                <ResultItemInfoMeta>
                                    Language:
                                    <ResultItemInfoMetaValue>{language}</ResultItemInfoMetaValue>
                                </ResultItemInfoMeta>
                            </RenderIf>
                        </ResultItemInfo>
                    </ResultItemInfoWrapper>
                    <ResultItemRatingWrapper>
                        <ResultItemRatingLite>
                            <ResultItemRating value={averageRating} />
                            <ResultItemRatingLabel>{ratingCount} Ratings</ResultItemRatingLabel>
                        </ResultItemRatingLite>
                        <RenderIf isTrue={hasCategories}>
                            <ResultItemCategoriesWrapper>
                                <ResultItemCategoriesLabel>Categories</ResultItemCategoriesLabel>
                                <ItemCategories categories={categories} />
                            </ResultItemCategoriesWrapper>
                        </RenderIf>
                    </ResultItemRatingWrapper>
                </ResultItemContent>
            </ResultItemContainer>
        </ResultItemWrapper>
    );
};

export default SearchResultItem;

SearchResultItem.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedBy: PropTypes.string,
    ratingCount: PropTypes.number,
    averageRating: PropTypes.string,
    language: PropTypes.string,
    cover: PropTypes.string,
    categories: PropTypes.array,
};
SearchResultItem.defaultProps = {
    className: undefined,
    style: undefined,
    title: '',
    author: '',
    publishedBy: '',
    ratingCount: 0,
    averageRating: 0,
    language: '',
    cover: '',
    categories: null,
};
