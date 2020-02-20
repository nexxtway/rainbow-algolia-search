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
        authors,
        publishedBy,
        ratingCount,
        averageRating,
        language,
        cover,
        categories,
    } = props;

    const hasCategories = !!categories && !!categories.length;
    const hasAuthors = !!authors && !!authors.length;
    const hasPublisher = !!publishedBy && !!publishedBy.length;
    const hasLanguage = !!language && !!language.length;

    return (
        <ResultItemWrapper className={className} style={style}>
            <ResultItemContainer>
                <ResultItemContent>
                    <ResultItemInfoWrapper>
                        <ResultItemImg src={cover} />
                        <ResultItemInfo>
                            <ResultItemTitle>{title}</ResultItemTitle>
                            <RenderIf isTrue={hasAuthors}>
                                <ResultItemInfoMeta>
                                    By:
                                    <ResultItemInfoMetaFeatured>
                                        {authors}
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
                            <ResultItemRating value={String(Math.round(Number(averageRating)))} />
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
    authors: PropTypes.string,
    publishedBy: PropTypes.string,
    ratingCount: PropTypes.number,
    averageRating: PropTypes.number,
    language: PropTypes.string,
    cover: PropTypes.string,
    categories: PropTypes.array,
};
SearchResultItem.defaultProps = {
    className: undefined,
    style: undefined,
    title: '',
    authors: '',
    publishedBy: '',
    ratingCount: 0,
    averageRating: 0,
    language: '',
    cover: '',
    categories: null,
};
