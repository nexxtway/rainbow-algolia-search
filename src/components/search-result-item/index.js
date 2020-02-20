import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import ItemCategories from '../item-categories';
import ItemRating from '../item-rating';
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
    ItemCategoriesWrapper,
} from './styled';

const styles = {
    itemRating: {
        textAlign: 'right',
    },
};

const SearchResultItem = props => {
    const {
        id,
        title,
        author,
        publishedBy,
        ratingCount,
        averageRating,
        language,
        cover,
        categories,
        className,
        style,
    } = props;

    const hasAuthor = !!author.length;
    const hasPublisher = !!publishedBy.length;
    const hasLanguage = !!language.length;

    const bookUrl = `/book/${id}`;

    return (
        <ResultItemWrapper className={className} style={style}>
            <ResultItemContainer href={bookUrl}>
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
                    <div>
                        <ItemRating
                            averageRating={averageRating}
                            ratingCount={ratingCount}
                            style={styles.itemRating}
                        />
                        <ItemCategoriesWrapper>
                            <ItemCategories categories={categories} />
                        </ItemCategoriesWrapper>
                    </div>
                </ResultItemContent>
            </ResultItemContainer>
        </ResultItemWrapper>
    );
};

export default SearchResultItem;

SearchResultItem.propTypes = {
    id: PropTypes.any,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedBy: PropTypes.string,
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
    publishedBy: '',
    ratingCount: 0,
    averageRating: '0',
    language: '',
    cover: '',
    categories: [],
    className: undefined,
    style: undefined,
};
